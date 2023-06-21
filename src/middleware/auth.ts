import { User } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { MunicipalityWithoutPassword, UserWithoutPassword } from '..'
import prisma from '../../prisma'

const tokenSecret = process.env.TOKEN_SECRET || 'authSecret'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token')
  if (!token) return res.status(401).send('Access Denied')

  try {
    const verified = jwt.verify(token, tokenSecret)
    if (typeof verified === 'string') throw new Error('Invalid Token')
    const id: string = verified._id
    const user = (await prisma.user.findUnique({
      where: {
        userId: id,
      },
      select: {
        password: false,
      },
    })) as UserWithoutPassword | null
    if (user) {
      if (req.path.includes('municipality') || req.path.includes('region')) {
        return res.status(401).send('Access Denied')
      }
      if (!req.context) req.context = {}
      req.context.user = user
      next()
      return
    }
    const municipality = (await prisma.municipality.findUnique({
      where: {
        municipalityId: id,
      },
      select: {
        password: false,
      },
    })) as MunicipalityWithoutPassword | null
    if (!municipality) throw new Error('Invalid Token')
    if (req.path.includes('user')) {
      return res.status(401).send('Access Denied')
    }
    if (!req.context) req.context = {}
    req.context.municipality = municipality
    next()
  } catch (err) {
    res.status(400).send('Invalid Token')
  }
}
