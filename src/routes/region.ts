import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

// ==== Request Entities ====
const pointsSchema = z.array(
  z.object({
    latitude: z.number().max(90).min(-90),
    longitude: z.number().max(180).min(-180),
  })
)
// ========


router.get('/', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')
    const regions = await prisma.region.findMany({
      where: {
        municipalityId: municipalityAccount.id,
      },
    })
    res.json(regions)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting all regions')
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const region = await prisma.region.findUnique({
      where: {
        id: id,
      },
    })
    if (region?.municipalityId !== municipalityAccount.id) {
      return res.status(401).send('Unauthorized')
    }
    res.json(region)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a region')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')
    const parsedBody = pointsSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody

    const result = await prisma.region.create({
      data: {
        municipalityId: municipalityAccount.id,
        points: {
          create: data,
        },
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating a region')
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const parsedBody = pointsSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    await prisma.regionPoint.deleteMany({
      where: {
        regionId: id,
      },
    })
    const result = await prisma.region.update({
      where: {
        id: id,
      },
      data: {
        points: {
          create: data,
        },
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while updating a region')
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { municipalityAccount } = req.context
    if (!municipalityAccount) return res.status(401).send('Unauthorized')
    const region = await prisma.region.findUnique({
      where: {
        id: req.params.id,
      },
    })
    if (!region) return res.status(404).send('Region not found')
    if (region.municipalityId !== municipalityAccount.id) {
      return res.status(401).send('Unauthorized')
    }
    const { id } = req.params
    const result = await prisma.region.delete({
      where: {
        id: id,
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a region')
  }
})

export default router
