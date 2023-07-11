import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

// ==== Request Entities ====
const createSchema = z.object({
  name: z.string(),
  description: z.string(),
  cost: z.number(),
})

const updateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  cost: z.number().optional(),
})
// ========


router.get('/', async (req: Request, res: Response) => {
  try {
    const rewards = await prisma.reward.findMany({
      select: {
        id: true,
        name: true,
        cost: true,
      },
    })
    res.json(rewards)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting rewards')
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const reward = await prisma.reward.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        cost: true,
      },
    })
    res.json(reward)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a reward')
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const parsedBody = createSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const result = await prisma.reward.create({ data })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating a reward')
  }
})

router.post('/:id', async (req: Request, res: Response) => {
  const { userAccount } = req.context
  if (!userAccount) return res.status(401).send('Unauthorized')

  try {
    const { id } = req.params

    const user = await prisma.user.findUnique({
      where: {id: userAccount.id},
    })
    if (!user) return res.status(404).send('User not found')

    const reward = await prisma.reward.findUnique({
      where: {id: id,},
    })
    if (!reward) return res.status(404).send('Reward not found')



    if (reward.cost > user.points)
      return res.status(403).send('Not enough points')
    const transaction = prisma.rewardTransaction.create({
      data: {
        userId: userAccount.id,
        rewardId: reward.id,
        rewardCost: reward.cost, // save cost b/c reward cost can change (e.g. discounts)
      },
    })
    const pointChange = prisma.pointChange.create({
      data: {
        userId: user.id,
        amount: -reward.cost,
      },
    })
    const updateUser = prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        points: {
          decrement: reward.cost,
        },
      },
    })
    await prisma.$transaction([transaction, pointChange, updateUser])
    res.json(reward)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while redeeming a reward')
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const parsedBody = updateSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const result = await prisma.reward.update({
      where: {
        id: id,
      },
      data,
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while updating a reward')
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await prisma.reward.delete({
      where: {
        id: id,
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a reward')
  }
})

export default router
