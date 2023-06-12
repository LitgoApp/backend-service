import express, { Request, Response } from "express";
import prisma from "../../prisma";
import bcrypt from 'bcrypt';
import logger from "../logger";

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    try {
        const user = await prisma.user.create({
            data: {
                ...req.body,
                password: hashedPassword,
            },
        });
        
        res.send({ user: user.userId });
    } catch (error: any) {
        if (error?.name === "ValidationError") {
          const message =
            "Invalid body contents. Please include all fields for a user.";
          logger.error(message);
          res.status(400).send(message);
        } else {
          res
            .status(500)
            .json({ message: "An error occurred while creating a user" });
        }
    }
    
  });

export default router;
