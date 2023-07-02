import e, { NextFunction, Request, Response } from 'express'
import prisma from '../../prisma'
import { createSchema, locationToMeters } from '../routes/litterSite'

export default async function fraudMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.path === '/api/litter-site/' && req.method === 'POST') {
    return createLitterSiteCheck(req, res, next)
  }
  // Add more endpoints to check for fraud here
  return next()
}

async function createLitterSiteCheck(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const parsedBody = createSchema.safeParse(req.body)
  if (!parsedBody.success) {
    return res.status(400).send(parsedBody.error)
  }
  const { data } = parsedBody
  const seventyTwoHoursAgo = new Date(Date.now() - 72 * 60 * 60 * 1000)
  const existingLitterSites = await prisma.litterSite.findMany({
    where: {
      isCollected: false,
      latitude: {
        gte: data.latitude - 5 / locationToMeters,
        lte: data.latitude + 5 / locationToMeters,
      },
      longitude: {
        gte: data.longitude - 5 / locationToMeters,
        lte: data.longitude + 5 / locationToMeters,
      },
      createdAt: {
        gte: seventyTwoHoursAgo,
      },
    },
  })
  if (existingLitterSites.length > 0)
    return res.status(403).send('Litter site already exists in this area')
  else return next()
}
