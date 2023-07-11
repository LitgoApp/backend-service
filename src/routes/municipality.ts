import bcrypt from 'bcrypt'
import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import prisma from '../../prisma'
import logger from '../logger'
import { loginSchema } from './user'

const router = express.Router()

// ==== Request Entities ====
const updateSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().optional(),
  name: z.string().optional(),
  phoneNumber: z.string().optional(),
})

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  phoneNumber: z.string(),
})
// ========


// GET
router.get('/', async (req: Request, res: Response) => {
  const { municipalityAccount } = req.context
  if  (!municipalityAccount) return res.status(401).send('Unauthorized');
  try {
    const municipality = await prisma.municipality.findUnique({
      where: { id: municipalityAccount.id},
    });
    if (!municipality) return res.status(404).send('Municipality not found');

    // remove id from response to avoid confusion
    var {id, ...municipalityAccountWithoutId} = municipalityAccount
    var {id, ...municipalityWithoutId} = municipality

    res.json({...municipalityAccountWithoutId, ...municipalityWithoutId})
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while getting municipality')
  }

})


// UPDATE
router.put('/', async (req: Request, res: Response) => {
  const { municipalityAccount } = req.context
  if (!municipalityAccount) return res.status(401).send('Unauthorized')
  
  try {
    const parsedBody = updateSchema.safeParse(req.body)
    if (!parsedBody.success) {
      return res.status(400).send(parsedBody.error)
    }

    // Encrypt new password if it exists
    const { data } = parsedBody
    const salt = bcrypt.genSaltSync(10)
    const new_password = data.password
      ? bcrypt.hashSync(data.password, salt)
      : undefined

    const updatedAccount = await prisma.municipalityAccount.update({
      where: {
        id: municipalityAccount.id,
      },
      data: {
        email: data.email,
        password: new_password,
      }
    })

    const updatedMunicipality = await prisma.municipality.update({
      where: {
        id: municipalityAccount.id,
      },
      data: {
        name: data.name,
        phoneNumber: data.phoneNumber,
      }
    })
    
    // remove id from response to avoid confusion
    var {id, password, ...accountWithoutIdAndPassword } = updatedAccount
    var {id, ...userWithoutId} = updatedMunicipality
    res.json({...accountWithoutIdAndPassword, ...userWithoutId})
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while updating a user')
  }
})


// DELETE
router.delete('/', async (req: Request, res: Response) => {
  const { municipalityAccount } = req.context
  if (!municipalityAccount) return res.status(401).send('Unauthorized')

  try {
    await prisma.municipality.delete({ // cascades for Municipality model
      where: {id: municipalityAccount.id,},
    })
    res.json({}).status(204)
  } 
  catch (error) {
    logger.error(error)
    res.status(500).send('An error occurred while deleting municipality')
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
    
    const municipalityAccount = await prisma.municipalityAccount.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    })

    await prisma.municipality.create({
      data: {
        id: municipalityAccount.id,
        name: data.name,
        phoneNumber: data.phoneNumber,
      },
    })

    res.status(200).send()
  } 
  catch (error) {
    res.status(500).send('An error occurred while registering municipality')
  }
})


// LOGIN
const tokenSecret = process.env.TOKEN_SECRET || 'authSecret'

router.post('/login', async (req: Request, res: Response) => {
  try {
    const parsedBody = loginSchema.safeParse(req.body)
    if (!parsedBody.success) return res.status(400).send(parsedBody.error)
    const { data } = parsedBody

    const municipalityAccount = await prisma.municipalityAccount.findUnique({
      where: {email: data.email,},
    })

    if (!municipalityAccount)
      return res.status(404).send('Email was not found')

    const validPass = await bcrypt.compare(data.password, municipalityAccount.password)
    if (!validPass) return res.status(401).send('Invalid password')

    await prisma.municipalityAccount.update({
      where: {id: municipalityAccount.id},
      data: {lastLoginAt: new Date().toISOString()}
    })

    const token = jwt.sign({ _id: municipalityAccount.id }, tokenSecret)
    res.header('auth-token', token).send({ token })
  } 
  catch (error) {
    res.status(500).send('An error occurred while logging in a user')
  }
})

export default router
