import express, { Request, Response } from "express";
import prisma from "../../prisma";
import {
  UserCreateInputObjectSchema,
  UserUpdateInputObjectSchema,
} from "../../prisma/generated/schemas/objects";
import logger from "../logger";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while getting all users" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        userId: id,
      },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while getting a user" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const data = UserCreateInputObjectSchema.validateSync(req.body);
    const result = await prisma.user.create({ data });
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
    const data = UserUpdateInputObjectSchema.validateSync(req.body);
    const result = await prisma.user.update({
      where: {
        userId: id,
      },
      data,
    });
    res.json(result);
  } catch (error: any) {
    if (error?.name === "ValidationError") {
      const message =
        "Invalid body contents. Please include at least one field for the user.";
      logger.error(message);
      res.status(400).send(message);
    }
    res
      .status(500)
      .json({ message: "An error occurred while updating a user" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await prisma.user.delete({
      where: {
        userId: id,
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
