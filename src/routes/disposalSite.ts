import express, { Request, Response } from 'express'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

const createSchema = z.object({
  latitude: z.number().max(90).min(-90),
  longitude: z.number().max(180).min(-180),
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')
    const disposalSites = await prisma.disposalSite.findMany({
      where: {
        municipalityId: municipality.municipalityId,
      },
    })
    res.json(disposalSites)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting the disposal site')
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')
    const { id } = req.params
    const disposalSite = await prisma.disposalSite.findUnique({
      where: {
        disposalSiteId: id,
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
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')

    const parsedBody = createSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const result = await prisma.disposalSite.create({
      data: {
        ...data,
        municipalityId: municipality.municipalityId,
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
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')

    const { id } = req.params
    const disposalSite = await prisma.disposalSite.findUnique({
      where: {
        disposalSiteId: id,
      },
    })
    if (!disposalSite) return res.status(404).send('Disposal site not found')
    if (disposalSite.municipalityId !== municipality.municipalityId) {
      return res.status(401).send('Unauthorized')
    }
    const deleted = await prisma.disposalSite.delete({
      where: {
        disposalSiteId: id,
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
