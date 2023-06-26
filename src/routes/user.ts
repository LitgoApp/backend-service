import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  address: z.string(),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

const updateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().optional(),
  name: z.string().optional(),
  address: z.string().optional(),
})

router.get('/', async (req: Request, res: Response) => {
  const { user } = req.context
  if (!user) return res.status(401).send('Unauthorized')
  res.json(user)
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')
    const parsedBody = updateSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const salt = bcrypt.genSaltSync(10)
    data.password = data.password
      ? bcrypt.hashSync(data.password, salt)
      : undefined
    const result = await prisma.user.update({
      where: {
        userId: user.userId,
      },
      data,
    })
    const { password, ...userWithoutPassword } = result
    res.json(userWithoutPassword)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while updating a user')
  }
})

router.delete('/', async (req: Request, res: Response) => {
  try {
    const { user } = req.context
    if (!user) return res.status(401).send('Unauthorized')
    const result = await prisma.user.delete({
      where: {
        userId: user.userId,
      },
    })
    const { password, ...userWithoutPassword } = result
    res.json(userWithoutPassword)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting a user')
  }
})

router.post('/register', async (req: Request, res: Response) => {
  try {
    const parsedBody = registrationSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data.password, salt)
    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    })
    res.send({ user: user.userId })
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating a user')
  }
})

const tokenSecret = process.env.TOKEN_SECRET || 'authSecret'

router.post('/login', async (req: Request, res: Response) => {
  try {
    const parsedBody = loginSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })
    if (!user) {
      return res.status(400).send('Email is not found')
    }
    const validPass = await bcrypt.compare(data.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password')

    const token = jwt.sign({ _id: user.userId }, tokenSecret)
    res.header('auth-token', token).send({ token })
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a user')
  }
})

export default router
