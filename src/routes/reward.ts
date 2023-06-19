import express, { Request, Response } from 'express'
import { number, object, string } from 'yup'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

const createSchema = object().shape({
  name: string().required(),
  description: string().required(),
  cost: number().required(),
})

const updateSchema = object().shape({
  name: string(),
  description: string(),
  cost: number(),
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const rewards = await prisma.reward.findMany()
    res.json(rewards)
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while getting all rewards',
    })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const reward = await prisma.reward.findUnique({
      where: {
        rewardId: id,
      },
    })
    res.json(reward)
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while getting a reward',
    })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const data = createSchema.validateSync(req.body)
    const result = await prisma.reward.create({ data })
    res.json(result)
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const message =
        'Invalid body contents. Please include all fields for a reward.'
      logger.error(message)
      res.status(400).send(message)
      return
    } else {
      logger.error(error)
      res.status(500).json({
        message: 'An error occurred while creating a reward',
      })
    }
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = updateSchema.validateSync(req.body)
    const result = await prisma.reward.update({
      where: {
        rewardId: id,
      },
      data,
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while updating a reward',
    })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await prisma.reward.delete({
      where: {
        rewardId: id,
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while deleting a reward',
    })
  }
})

export default router
