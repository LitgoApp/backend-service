import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'

const router = express.Router()

// ==== Request DTOs ====
const updateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().optional(),

  name: z.string().optional(),
  address: z.string().optional(),
})

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
// ========


// GET: for debugging purposes
router.get('/', async (req: Request, res: Response) => {
  const { userAccount } = req.context
  if  (!userAccount) return res.status(401).send('Unauthorized');
  try {
    const user = await prisma.user.findUnique({
      where: { id: userAccount?.id},
    });
    res.json({...user, ...userAccount})
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting user')
  }
})


// UPDATE
router.put('/', async (req: Request, res: Response) => {
  const { userAccount } = req.context
  if  (!userAccount) return res.status(401).send('Unauthorized');
  
  try {
    const parsedBody = updateSchema.safeParse(req.body)
    if (!parsedBody.success) return res.status(400).send(parsedBody.error)
    const { data } = parsedBody

    // Encrypt new password if it exists
    const salt = bcrypt.genSaltSync(10)
    const new_password = data.password
      ? bcrypt.hashSync(data.password, salt)
      : undefined

    const updated_account = await prisma.userAccount.update({
      where: {id: userAccount.id,},
      data: {
        email: data.email,
        password: new_password
      }
    })
    
    const updated_user = await prisma.user.update({
      where: {id: userAccount.id,},
      data: {
        name: data.name,
        address: data.address
      }
    })

    const { password, ...accountWithoutPassword } = updated_account
    res.json({...accountWithoutPassword, ...updated_user})
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while updating a user')
  }
})


// DELETE
router.delete('/', async (req: Request, res: Response) => {
  const { userAccount } = req.context
  if (!userAccount) return res.status(401).send('Unauthorized')

  try {
    await prisma.userAccount.delete({ // cascades for User model
      where: {id: userAccount.id,},
    })
    res.json({}).status(204)
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting user')
  }
})


// REGISTER
router.post('/register', async (req: Request, res: Response) => {
  try {
    const parsedBody = registrationSchema.safeParse(req.body)
    if (!parsedBody.success) return res.status(400).send(parsedBody.error)
    const { data } = parsedBody
    
    // Encrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data.password, salt)

    const userAccount = await prisma.userAccount.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    })

    await prisma.user.create({
      data: {
        id: userAccount.id,
        name: data.name,
        address: data.address
      },
    })

    res.status(200).send()
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while creating user')
  }
})


// LOGIN
const tokenSecret = process.env.TOKEN_SECRET || 'authSecret'

router.post('/login', async (req: Request, res: Response) => {
  try {
    const parsedBody = loginSchema.safeParse(req.body)
    if (!parsedBody.success) return res.status(400).send(parsedBody.error)
    const { data } = parsedBody

    const userAccount = await prisma.userAccount.findUnique({
      where: {email: data.email,},
    })

    if (!userAccount)
      return res.status(404).send('Email was not found')

    const validPass = await bcrypt.compare(data.password, userAccount.password)
    if (!validPass) return res.status(401).send('Invalid password')

    await prisma.userAccount.update({
      where: {id: userAccount.id},
      data: {lastLoginAt: new Date().toISOString()}
    })

    const token = jwt.sign({ _id: userAccount.id }, tokenSecret)
    res.header('auth-token', token).send({ token })
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting a user')
  }
})

export default router
