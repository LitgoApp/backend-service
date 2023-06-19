import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { object, string } from 'yup'
import prisma from '../../prisma'
import logger from '../logger'
import { loginSchema } from './user'

const router = express.Router()

const registrationSchema = object().shape({
  email: string().email().required(),
  password: string().required(),
  name: string().required(),
  phoneNumber: string().required(),
})

const updateSchema = object().shape({
  email: string().email(),
  password: string(),
  name: string(),
  phoneNumber: string(),
})

// TODO:  exclude password from all json responses

router.get('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).json({ message: 'Unauthorized' })
    res.json(municipality)
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: 'An error occurred while getting all users',
    })
  }
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).json({ message: 'Unauthorized' })
    const data = updateSchema.validateSync(req.body)
    const salt = bcrypt.genSaltSync(10)
    data.password = data.password
      ? bcrypt.hashSync(data.password, salt)
      : undefined
    const result = await prisma.municipality.update({
      where: {
        municipalityId: municipality.municipalityId,
      },
      data,
    })
    res.json(result)
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const message =
        'Invalid body contents. Please include all fields for a user.'
      logger.error(message)
      res.status(400).send(message)
    } else {
      res
        .status(500)
        .json({ message: 'An error occurred while updating a user' })
    }
  }
})

router.delete('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).json({ message: 'Unauthorized' })
    const result = await prisma.municipality.delete({
      where: {
        municipalityId: municipality.municipalityId,
      },
    })
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting a user' })
  }
})

router.post('/register', async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  try {
    const body = registrationSchema.validateSync(req.body)
    const municipality = await prisma.municipality.create({
      data: {
        ...body,
        password: hashedPassword,
      },
    })
    res.send({ municipality: municipality.municipalityId })
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      const message =
        'Invalid body contents. Please include all fields for a user.'
      logger.error(message)
      res.status(400).send(message)
    } else {
      res
        .status(500)
        .json({ message: 'An error occurred while creating a user' })
    }
  }
})

router.post('/login', async (req: Request, res: Response) => {
  try {
    const data = loginSchema.validateSync(req.body)
    const municipality = await prisma.municipality.findUnique({
      where: {
        email: data.email,
      },
    })
    if (!municipality) {
      return res.status(400).send('Email is not found')
    }
    const validPass = await bcrypt.compare(data.password, municipality.password)
    if (!validPass) return res.status(400).send('Invalid password')

    const token = jwt.sign(
      { _id: municipality.municipalityId },
      process.env.TOKEN_SECRET as string
    )
    res.header('auth-token', token).send(token)
  } catch (error: any) {
    if (error?.name === 'ValidationError') {
      return res.status(400).send('Please provide email and password')
    }
    res.status(500).json({ message: 'An error occurred while getting a user' })
  }
})

export default router
