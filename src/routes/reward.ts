import { PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';
const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
    try {
        const rewards = await prisma.reward.findMany()
        res.json(rewards)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting all rewards'  })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reward = await prisma.reward.findUnique({
            where: {
                rewardId: id
            }
        })
        res.json(reward)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting a reward'  })
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const result = await prisma.reward.create({
            data: {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating a reward'  })
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.reward.update({
            where: {
                rewardId: id
            },
            data: {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating a reward'  })
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.reward.delete({
            where: {
                rewardId: id
            }
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting a reward'  })
    }
});

module.exports = router;
