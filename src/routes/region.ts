import express, { Request, Response } from 'express'
import * as Yup from 'yup'
import prisma from '../../prisma'
import { RegionPointUpdateWithoutRegionInputObjectSchema } from '../../prisma/generated/schemas/objects'
import logger from '../logger'

const router = express.Router()

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
  try {
    const municipalityId = req.params.id
    const result = await prisma.region.create({
      data: {
        municipalityId,
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
    const points = Yup.array(RegionPointUpdateWithoutRegionInputObjectSchema)
      .required()
      .validateSync(req.body)
    const result = await prisma.regionPoint.updateMany({
      where: {
        regionPointId: {
          in: points.map(({ regionPointId }) => regionPointId),
        },
        regionId: id,
      },
      data: points,
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
