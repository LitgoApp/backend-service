import { PrismaClient } from '@prisma/client';
import express, { Express, Request, Response } from 'express';
const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting all users'  })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                userId: id
            }
        })
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting a user'  })
    }
});


router.post('/', async (req: Request, res: Response) => {
    try {
        const result = await prisma.user.create({
            data: {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                level: req.body.level,
                points: req.body.points,
                fraudLevel: req.body.fraudLevel,
                address: req.body.address,
                reportedLitter: req.body.reportedLitter,
                collectedLitter: req.body.collectedLitter,
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating a user'  })
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.update({
            where: {
                userId: id
            },
            data: {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                level: req.body.level,
                points: req.body.points,
                fraudLevel: req.body.fraudLevel,
                address: req.body.address,
                reportedLitter: req.body.reportedLitter,
                collectedLitter: req.body.collectedLitter,
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating a user'  })
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.delete({
            where: {
                userId: id
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting a user'  })
    }
});

module.exports = router;
