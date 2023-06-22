import express, { Request, Response } from 'express'
import prisma from '../../prisma'
import logger from '../logger'
import { z } from 'zod'

const router = express.Router()

const createSchema = z.object({
    latitude: z.number().max(90).min(-90),
    longitude: z.number().max(180).min(-180),
    // TODO: add more fields
})

// get all disposal sites in a region
router.get('/', async (req: Request, res: Response) => {
    // TODO
})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { user } = req.context
        if (!user) return res.status(401).send('Unauthorized')
        const { id } = req.params
        const disposalSite = await prisma.disposalSite.findUnique({
            where: {
                disposalSiteId: id,
            },
        })
        if (disposalSite?.userId !== user.userId) {
            return res.status(401).send('Unauthorized')
        }
        res.json(disposalSite)
    } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting the disposal site')
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

        const result = await prisma.disposalSite.create({
            data: {
                ...data,
                userId: user.userId,
            },
        })
        res.json(result)
    } catch (error) {
        logger.error(error)
        res.status(500).send('An error occurred while getting adding disposal site')
    }
    res.sendStatus(501)
})

router.put('/:id', async (req: Request, res: Response) => {
    // TODO
})

router.delete('/:id', async (req: Request, res: Response) => {
    // TODO
})


