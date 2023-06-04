import express, { Express, Request, Response } from 'express';
const router = express.Router();
const prisma = require("@prisma/client").PrismaClient;

router.get('/', async (req: Request, res: Response) => {
    try {
        const regions = await prisma.region.findMany()
        res.json(regions)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting all regions' })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const region = await prisma.region.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(region)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting a region' })
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const result = await prisma.region.create({
            data: {
                regionId: req.body.regionId,
                municipalityId: req.body.municipalityId,
                points: req.body.points,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating a region' })
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.region.update({
            where: {
                id: Number(id)
            },
            data: {
                regionId: req.body.regionId,
                municipalityId: req.body.municipalityId,
                points: req.body.points,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating a region' })
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.region.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting a region' })
    }
});

module.exports = router;