import { HarmLevel } from '@prisma/client'
import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import distance from '../helpers/distance'
import logger from '../logger'

const router = express.Router()

const createSchema = z.object({
  latitude: z.number().max(90).min(-90),
  longitude: z.number().max(180).min(-180),
  harm: z.nativeEnum(HarmLevel),
  description: z.string(),
  litterCount: z.number().min(0),
  image: z.string(),
})

const locationToMeters = 111379 // 1 degree of latitude/longitude is 111379 meters

// get closest 100 litter sites to a location, that are all withim 1km of locaiton
router.get('/', async (req: Request, res: Response) => {
  try {
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')

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
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')

    const litterSites = await prisma.litterSite.findMany({
      where: {
        reporterUserId: user.userId,
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
        litterSiteId: id,
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
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')
    const parsedBody = createSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const result = await prisma.litterSite.create({
      data: {
        ...data,
        image: Buffer.from(data.image, 'base64'),
        reporterUserId: user.userId,
      },
    })
    // TODO: Add points to user based on litterCount
    // TODO: Add anti fraud mechanisms
    const { image, ...rest } = result
    res.json(rest)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating a litter site')
  }
})

router.post('/:id', async (req: Request, res: Response) => {
  try {
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const litterSite = await prisma.litterSite.findUnique({
      where: {
        litterSiteId: id,
      },
      select: { isCollected: true },
    })
    if (!litterSite) return res.status(404).send('Litter site not found')
    if (litterSite.isCollected)
      return res.status(409).send('Litter site already claimed')
    const result = await prisma.litterSite.update({
      where: {
        litterSiteId: id,
      },
      data: {
        collectorUserId: user.userId,
        isCollected: true,
      },
    })
    // TODO: Add points to collecting user based on litterCount
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
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const litterSite = await prisma.litterSite.findUnique({
      where: {
        litterSiteId: id,
      },
      select: {
        reporterUserId: true,
      },
    })
    if (!litterSite) return res.status(404).send('Litter site not found')
    if (litterSite.reporterUserId !== user.userId)
      return res.status(401).send('Unauthorized')
    const result = await prisma.litterSite.delete({
      where: {
        litterSiteId: id,
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
