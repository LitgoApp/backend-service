import { HarmLevel } from '@prisma/client'
import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import distance from '../helpers/distance'
import logger from '../logger'

const router = express.Router()

export const createSchema = z.object({
  latitude: z.number().max(90).min(-90),
  longitude: z.number().max(180).min(-180),
  harm: z.nativeEnum(HarmLevel),
  description: z.string(),
  litterCount: z.number().min(0),
  image: z.string(),
})

export const locationToMeters = 111379 // 1 degree of latitude/longitude is 111379 meters

// get closest 100 litter sites to a location, that are all withim 1km of locaiton
router.get('/', async (req: Request, res: Response) => {
  try {
    const { userAccount } = req.context
    if (!userAccount) return res.status(401).send('Unauthorized')

    const { latitude: lat, longitude: long } = req.query // pass regionId as query param
    if (!lat || !long) return res.status(400).send('Missing query param')
    const latitude = Number(lat)
    const longitude = Number(long)

    const delta = 1000 / locationToMeters
    const nearbyLitterSites = await prisma.litterSite.findMany({
      where: {
        latitude: {
          gte: latitude - delta,
          lte: latitude + delta,
        },
        longitude: {
          gte: longitude - delta,
          lte: longitude + delta,
        },
      },
    })
    nearbyLitterSites.sort(
      (a, b) =>
        distance(a, { latitude, longitude }) -
        distance(b, { latitude, longitude })
    )
    res.json(nearbyLitterSites.slice(0, 100))
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting all litter sites')
  }
})

// get all litter sites submitted by a user
router.get('/created', async (req: Request, res: Response) => {
  try {
    const { userAccount } = req.context
    if (!userAccount ) return res.status(401).send('Unauthorized')

    const litterSites = await prisma.litterSite.findMany({
      where: {
        reporterUserId: userAccount.id,
      },
    })
    res.json(litterSites)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting all litter sites')
  }
})

// Get a litter site by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { latitude: lat, longitude: long } = req.query
    const latitude = Number(lat)
    const longitude = Number(long)
    const litterSite = await prisma.litterSite.findUnique({
      where: {
        id: id,
      },
    })
    if (!litterSite) return res.status(404).send('Litter site not found')
    const { image, ...rest } = litterSite
    if (lat !== undefined && long !== undefined) {
      // Find closest disposal site
      const delta = 200 / locationToMeters
      const nearbyDisposalSites = await prisma.disposalSite.findMany({
        where: {
          latitude: {
            gte: latitude - delta,
            lte: latitude + delta,
          },
          longitude: {
            gte: longitude - delta,
            lte: longitude + delta,
          },
        },
      })
      nearbyDisposalSites.sort(
        (a, b) =>
          distance(a, { latitude, longitude }) -
          distance(b, { latitude, longitude })
      )
      if (nearbyDisposalSites.length > 0) {
        return res.json({
          ...rest,
          image: image.toString('base64'),
          disposalSite: nearbyDisposalSites[0],
        })
      }
    }
    res.json({
      ...rest,
      image: image.toString('base64'),
    })
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a litter site')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { userAccount } = req.context
    if (!userAccount) return res.status(401).send('Unauthorized')
    const parsedBody = createSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const createLitterSite = prisma.litterSite.create({
      data: {
        ...data,
        image: Buffer.from(data.image, 'base64'),
        reporterUserId: userAccount.id,
      },
    })
    const pointChange = prisma.pointChange.create({
      data: {
        userId: userAccount.id,
        amount: data.litterCount,
      },
    })
    const updateUser = prisma.user.update({
      where: {
        id: userAccount.id,
      },
      data: {
        points: {
          increment: data.litterCount,
        },
      },
    })
    const [result] = await prisma.$transaction([
      createLitterSite,
      pointChange,
      updateUser,
    ])
    const { image, ...rest } = result
    res.json(rest)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating a litter site')
  }
})

// Claim a litter site
router.post('/:id', async (req: Request, res: Response) => {
  try {
    const { userAccount }= req.context
    if (!userAccount) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const litterSite = await prisma.litterSite.findUnique({
      where: {
        id: id,
      },
      select: { isCollected: true },
    })
    if (!litterSite) return res.status(404).send('Litter site not found')
    if (litterSite.isCollected)
      return res.status(409).send('Litter site already claimed')
    const result = await prisma.litterSite.update({
      where: {
        id: id,
      },
      data: {
        collectorUserId: userAccount.id,
        isCollected: true,
      },
    })
    const pointChange = prisma.pointChange.create({
      data: {
        userId: userAccount.id,
        amount: result.litterCount * 3,
      },
    })
    const updateUser = prisma.user.update({
      where: {
        id: userAccount.id,
      },
      data: {
        points: {
          increment: result.litterCount * 3,
        },
      },
    })
    await prisma.$transaction([pointChange, updateUser])
    // TODO: Add anti fraud mechanisms
    const { image, ...rest } = result
    res.json(rest)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating a litter site')
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { userAccount } = req.context
    if (!userAccount) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const litterSite = await prisma.litterSite.findUnique({
      where: {
        id: id,
      },
      select: {
        reporterUserId: true,
      },
    })
    if (!litterSite) return res.status(404).send('Litter site not found')
    if (litterSite.reporterUserId !== userAccount.id)
      return res.status(401).send('Unauthorized')
    const result = await prisma.litterSite.delete({
      where: {
        id: id,
      },
    })
    const { image, ...rest } = result
    res.json(rest)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a litter site')
  }
})

export default router
