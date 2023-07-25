import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import distance from '../helpers/distance'
import logger from '../logger'
import { locationToMeters } from './litterSite'

const router = express.Router()

// ==== Request Entities ====
const createSchema = z.object({
  latitude: z.number().max(90).min(-90),
  longitude: z.number().max(180).min(-180),
})
// ========

router.get('/', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount, userAccount } = req.context
    if (municipalityAccount) {
      const disposalSites = await prisma.disposalSite.findMany({
        where: {
          municipalityId: municipalityAccount.id,
        },
      })
      return res.json(disposalSites)
    } else if (userAccount) {
      const { latitude: lat, longitude: long } = req.query
      if (!lat || !long)
        return res.status(400).send('Missing user location as query parameters')
      const latitude = Number(lat)
      const longitude = Number(long)
      const delta = 500 / locationToMeters
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
        include: {
          municipality: true,
        },
      })
      nearbyDisposalSites.sort(
        (a, b) =>
          distance(a, { latitude, longitude }) -
          distance(b, { latitude, longitude })
      )
      return res.json(nearbyDisposalSites.slice(0, 100))
    } else return res.status(401).send('Unauthorized')
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting the disposal site')
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const disposalSite = await prisma.disposalSite.findUnique({
      where: {
        id: id,
      },
    })
    if (!disposalSite) return res.status(404).send('Disposal site not found')
    res.json(disposalSite)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting the disposal site')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')

    const parsedBody = createSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const result = await prisma.disposalSite.create({
      data: {
        ...data,
        municipalityId: municipalityAccount.id,
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting adding disposal site')
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')

    const { id } = req.params
    const disposalSite = await prisma.disposalSite.findUnique({
      where: {
        id: id,
      },
    })
    if (!disposalSite) return res.status(404).send('Disposal site not found')
    if (disposalSite.municipalityId !== municipalityAccount.id) {
      return res.status(401).send('Unauthorized')
    }
    const deleted = await prisma.disposalSite.delete({
      where: {
        id: id,
      },
    })
    if (!deleted)
      return res
        .status(500)
        .send('An error occurred while deleting the disposal site')
    res.json(deleted)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting adding disposal site')
  }
})

export default router
