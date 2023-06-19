import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { object, string } from 'yup'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

const registrationSchema = object().shape({
  email: string().email().required(),
  password: string().required(),
  name: string().required(),
  address: string().required(),
})

export const loginSchema = object().shape({
  email: string().email().required(),
  password: string().required(),
})

const updateSchema = object().shape({
  email: string().email(),
  password: string(),
  name: string(),
  address: string(),
})

// TODO:  exclude password from all json responses

router.get('/', async (req: Request, res: Response) => {
  const { user } = req.context
  if (!user) return res.status(401).json({ message: 'Unauthorized' })
  res.json(req.context.user)
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const { user } = req.context
    if (!user) return res.status(401).json({ message: 'Unauthorized' })
    const data = updateSchema.validateSync(req.body)
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
    res.json(result)
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const message =
        'Invalid body contents. Please include at least one field for the user.'
      logger.error(message)
      res.status(400).send(message)
    }
    res.status(500).json({ message: 'An error occurred while updating a user' })
  }
})

router.delete('/', async (req: Request, res: Response) => {
  try {
    const { user } = req.context
    if (!user) return res.status(401).json({ message: 'Unauthorized' })
    const result = await prisma.user.delete({
      where: {
        userId: user.userId,
      },
    })
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting a user' })
  }
})

router.post('/register', async (req: Request, res: Response) => {
  try {
    const body = registrationSchema.validateSync(req.body)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(body.password, salt)
    const user = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    })
    res.send({ user: user.userId })
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const message =
        'Invalid body contents. Please include all fields for registration.'
      logger.error(message)
      res.status(400).send(message)
    } else {
      res
        .status(500)
        .json({ message: 'An error occurred while creating a user' })
    }
  }
})

const tokenSecret = process.env.TOKEN_SECRET || 'authSecret'

router.post('/login', async (req: Request, res: Response) => {
  const data = loginSchema.validateSync(req.body)
  try {
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
    res.header('auth-token', token).send(token)
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      return res
        .status(400)
        .json({ message: 'Please provide a username and password' })
    }
    res.status(500).json({ message: 'An error occurred while getting a user' })
  }
})

export default router
