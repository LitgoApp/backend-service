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


type Point = [number, number];

// check if a point is inside a polygon
function inside(point: Point, vs: Point[]): boolean {
  const x = point[0], y = point[1];
  
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      const xi = vs[i][0], yi = vs[i][1];
      const xj = vs[j][0], yj = vs[j][1];
      
      const intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
  return inside;
};

// get all litter sites in a region
router.get('/', async (req: Request, res: Response) => {
  try {
    const { user } = req.context;
    if (!user) return res.status(401).send('Unauthorized');
    
    const regionIdQuery = req.query.regionId; // pass regionId as query param
    
    const region = await prisma.region.findUnique({
      where: {
        regionId: regionIdQuery as string,
      },
      include: {
        points: true,
      },
    });

    if (!region) return res.status(404).send('Region not found');

    const polygon: Point[] = region.points.map((p: { latitude: number; longitude: number }) => [p.latitude, p.longitude]);

    const allLitterSites = await prisma.litterSite.findMany();

    const litterSitesInRegion = allLitterSites.filter((site: { latitude: number; longitude: number }) => inside([site.latitude, site.longitude], polygon));
    res.json(litterSitesInRegion)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting all litter sites')
  }
  res.sendStatus(501)
});

// get all litter sites submitted by a user
router.get('/created', async (req: Request, res: Response) => {
  try {
    const { user } = req.context;
    if (!user) return res.status(401).send('Unauthorized');

    const litterSites = await prisma.litterSite.findMany({
      where: {
        reporterUserId: user.userId,
      },
    })
    res.json(litterSites)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting all litter sites')
  }
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
    res.json({
      ...rest,
      image: image.toString('base64'),
    })
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
      return res.status(401).send('Unauthorized')
    const result = await prisma.litterSite.delete({
      where: {
        litterSiteId: id,
      },
    })
    const { image, ...rest } = result
    res.json(rest)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a litter site')
  }
})

export default router
