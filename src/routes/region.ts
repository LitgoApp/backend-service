import express, { Request, Response } from 'express'
import { array, number, object } from 'yup'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

const pointsSchema = array(
  object().shape({
    latitude: number().max(90).min(-90).required(),
    longitude: number().max(180).min(-180).required(),
  })
).required()

router.get('/', async (req: Request, res: Response) => {
  try {
    const regions = await prisma.region.findMany()
    res.json(regions)
  } catch (error) {
    logger.error(error)
    res
      .status(500)
      .json({ message: 'An error occurred while getting all regions' })
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
  } catch (error: any) {
    logger.error(error)
    res
      .status(500)
      .json({ message: 'An error occurred while getting a region' })
  }
})

router.post('/:id', async (req: Request, res: Response) => {
  const { municipality } = req.context
  if (!municipality)
    return res.status(404).json({ message: 'Municipality not found' })
  const points = pointsSchema.validateSync(req.body)
  try {
    const result = await prisma.region.create({
      data: {
        municipalityId: municipality.municipalityId,
        points: {
          create: points,
        },
      },
    })
    res.json(result)
  } catch (error: any) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while creating a region',
    })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const points = pointsSchema.validateSync(req.body)
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
          create: points,
        },
      },
    })
    res.json(result)
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const message =
        'Invalid body contents. Please provide an array of points in the body.'
      logger.error(message)
      res.status(400).send(message)
      return
    } else {
      logger.error(error)
      res
        .status(500)
        .json({ message: 'An error occurred while updating a region' })
    }
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
    res
      .status(500)
      .json({ message: 'An error occurred while deleting a region' })
  }
})

export default router
