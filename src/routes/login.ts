import express, { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
            email: req.body.email,
            },
        });
        if (!user) {
            return res.status(400).send('Email is not found');
        }
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if (!validPass) return res.status(400).send('Invalid password');

        const token = jwt.sign({ _id: user.userId }, process.env.TOKEN_SECRET as string);
        res.header('auth-token', token).send(token);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while getting a user" });
    }
});

export default router;