import express, { Request, Response } from "express";
import prisma from "../../prisma";
// import {                     ??????
//   UserCreateInputObjectSchema,
//   UserUpdateInputObjectSchema,
// } from "../../prisma/generated/schemas/objects";
import logger from "../logger";

const router = express.Router();

// TODO:  exclude password from all json responses

router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await prisma.municipality.findMany();
        res.json(users);
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

export default router;
