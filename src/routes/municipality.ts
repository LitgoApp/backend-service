import express, { Request, Response } from "express";
import prisma from "../../prisma";
// import {                     ??????
//   UserCreateInputObjectSchema,
//   UserUpdateInputObjectSchema,
// } from "../../prisma/generated/schemas/objects";
import logger from "../logger";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// TODO:  exclude password from all json responses

router.get("/", async (req: Request, res: Response) => {
    try {
        const municipality = await prisma.municipality.findMany();
        res.json(municipality);
    } catch (error) {
        logger.error(error);
        res.status(500).json({
            message: "An error occurred while getting all users",
        });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        // const data = UserCreateInputObjectSchema.validateSync(req.body);
        const data = req.body;
        const result = await prisma.municipality.create({ data });
        res.json(result);
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

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // const data = UserUpdateInputObjectSchema.validateSync(req.body);
        const data = req.body;
        const result = await prisma.municipality.update({
            where: {
                municipalityId: id,
            },
            data,
        });
        res.json(result);
    } catch (error: any) {
        if (error?.name === "ValidationError") {
        const message =
            "Invalid body contents. Please include all fields for a user.";
        logger.error(message);
        res.status(400).send(message);
        } else {
        res
            .status(500)
            .json({ message: "An error occurred while updating a user" });
        }
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await prisma.municipality.delete({
            where: {
                municipalityId: id,
            },
        });
        res.json(result);
    } catch (error) {
        res
        .status(500)
        .json({ message: "An error occurred while deleting a user" });
    }
});

router.post('/register', async (req: Request, res: Response) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        // const body = UserUpdateInputObjectSchema.validateSync(req.body);
        const body = req.body;
        const municipality = await prisma.municipality.create({
            data: {
                ...body,
                password: hashedPassword,
            },
        });
        res.send({ municipality: municipality.municipalityId });
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
  
router.post('/login', async (req: Request, res: Response) => {
    try {
        const municipality = await prisma.municipality.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (!municipality) {
            return res.status(400).send('Email is not found');
        }
        const validPass = await bcrypt.compare(req.body.password, municipality.password);
        if (!validPass) return res.status(400).send('Invalid password');

        const token = jwt.sign({ _id: municipality.municipalityId }, process.env.TOKEN_SECRET as string);
        res.header('auth-token', token).send(token);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while getting a user" });
    }
});

export default router;
