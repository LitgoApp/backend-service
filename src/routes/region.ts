import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

const pointsSchema = z.array(
  z.object({
    latitude: z.number().max(90).min(-90),
    longitude: z.number().max(180).min(-180),
  })
)

router.get('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')
    const regions = await prisma.region.findMany({
      where: {
        municipalityId: municipality.municipalityId,
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
    const { id } = req.params
    const region = await prisma.region.findUnique({
      where: {
        regionId: id,
      },
    })
    res.json(region)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a region')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality)
      return res.status(404).json({ message: 'Municipality not found' })
    const parsedBody = pointsSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res
        .status(400)
        .send(
          'Invalid body contents. Please provide an array of points in the body.'
        )
    }
    const { data } = parsedBody

    const result = await prisma.region.create({
      data: {
        municipalityId: municipality.municipalityId,
        points: {
          create: data,
        },
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while creating a region',
    })
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
        regionId: id,
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
    const { id } = req.params
    const result = await prisma.region.delete({
      where: {
        regionId: id,
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a region')
  }
})

export default router
