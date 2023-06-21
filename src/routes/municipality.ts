import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'
import { loginSchema } from './user'

const router = express.Router()

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  phoneNumber: z.string(),
})

const updateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().optional(),
  name: z.string().optional(),
  phoneNumber: z.string().optional(),
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')
    res.json(municipality)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting all users')
  }
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')
    const parsedBody = updateSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
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
    const { password, ...municipalityWithoutPassword } = result
    res.json(municipalityWithoutPassword)
  } catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while updating a user')
  }
})

router.delete('/', async (req: Request, res: Response) => {
  try {
    const { municipality } = req.context
    if (!municipality) return res.status(401).send('Unauthorized')
    const result = await prisma.municipality.delete({
      where: {
        municipalityId: municipality.municipalityId,
      },
    })
    const { password, ...municipalityWithoutPassword } = result
    res.json(municipalityWithoutPassword)
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
    const municipality = await prisma.municipality.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    })
    res.send({ municipality: municipality.municipalityId })
  } catch (error) {
    res.status(500).send('An error occurred while registering a user')
  }
})

router.post('/login', async (req: Request, res: Response) => {
  try {
    const parsedBody = loginSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }
    const { data } = parsedBody
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
  } catch (error) {
    res.status(500).send('An error occurred while logging in a user')
  }
})

export default router
