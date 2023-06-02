import express, { Express, Request, Response } from 'express';
const router = express.Router();
const prisma = require("@prisma/client").PrismaClient;

router.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting all users'  })
    }
});

router.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while getting a user'  })
    }
});


router.post('/users', async (req: Request, res: Response) => {
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
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating a user'  })
    }
});

router.put('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.update({
            where: {
                id: Number(id)
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
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while updating a user'  })
    }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.delete({
            where: {
                id: Number(id)
            },
        })
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while deleting a user'  })
    }
});

module.exports = router;