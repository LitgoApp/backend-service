import { HarmLevel } from '@prisma/client'
import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
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

router.get('/', async (req: Request, res: Response) => {
  // TODO get all litter sites, potentially based on location
  res.sendStatus(501)
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const litterSite = await prisma.litterSite.findUnique({
      where: {
        litterSiteId: id,
      },
    })
    if (!litterSite) return res.status(404).send('Litter site not found')
    const { image, ...rest } = litterSite
    res.json(rest)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a litter site')
  }
  res.sendStatus(501)
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

router.put('/:id', async (req: Request, res: Response) => {
  // TODO claim litter site (as completed)
  res.sendStatus(501)
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
      return res.status(403).send('Forbidden')
    const result = await prisma.litterSite.delete({
      where: {
        litterSiteId: id,
      },
    })
    res.json(result)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a litter site')
  }
})

export default router
