import e, { NextFunction, Request, Response } from 'express'
import prisma from '../../prisma'
import distance from '../helpers/distance'
import { createSchema, locationToMeters } from '../routes/litterSite'

export default async function fraudMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.path === '/api/litter-site/' && req.method === 'POST') {
    return createLitterSiteCheck(req, res, next)
  }
  if (req.path.match(/\/api\/litter-site\/.+/) && req.method === 'POST') {
    return claimLitterSiteCheck(req, res, next)
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
  const existingLitterSite = await prisma.litterSite.findFirst({
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
  if (existingLitterSite)
    return res.status(403).send('Litter site already exists in this area')
  else return next()
}

async function claimLitterSiteCheck(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.path.split('/')[3]
  const litterSite = await prisma.litterSite.findUnique({
    where: {
      litterSiteId: id,
    },
  })
  const { latitude: lat, longitude: long } = req.query
  if (lat === undefined || long === undefined)
    return res
      .status(400)
      .send('Missing latitude or longitude as a query parameter')
  const latitude = Number(lat)
  const longitude = Number(long)
  if (!litterSite) return res.status(404).send('Litter site not found')
  // Check if litter site is within 5 meters
  if (distance(litterSite, { latitude, longitude }) > 5)
    return res.status(403).send('Litter site too far away to claim')
  // Check if there wasnt enough time to clean (assuming 5s to clean up each piece of litter)
  if (
    litterSite.createdAt > new Date(Date.now() - litterSite.litterCount * 5000)
  )
    return res.status(403).send('Litter site was created too recently')
  return next()
}
