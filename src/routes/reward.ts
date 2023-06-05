import express, { Express, Request, Response } from 'express';
const router = express.Router();
const prisma = require("@prisma/client").PrismaClient;

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
                id: Number(id)
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
                id: Number(id)
            },
            data: {
                name: req.body.name,
                cost: req.body.cost,
                description: req.body.description,
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
                id: Number(id)
            }
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting a reward'  })
    }
});

module.exports = router;