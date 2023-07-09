import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import prisma from '../../prisma'

const tokenSecret = process.env.TOKEN_SECRET || 'authSecret'

const municipalityPaths = ['municipality', 'region']

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header('auth-token') // TODO: Change this to Authorization: "bearer ..." scheme (RFC6750)
  if (!token) return res.status(401).send('Access Denied')

  try {
    const verified = jwt.verify(token, tokenSecret)
    if (typeof verified === 'string') throw new Error('Invalid Token')
    const id: string = verified._id

    // Authorize as User:
    const userAccount = await prisma.userAccount.findUnique({
      where: {id: id,},
    })
    if (userAccount) {
      if (!municipalityPaths.every(path => !req.path.includes(path))) { // if request path is for municipality...
        return res.status(401).send('Access Denied')
      }
      const { password, ...accountWithoutPassword } = userAccount
      if (!req.context) req.context = {}
      req.context.userAccount = accountWithoutPassword
      next()  // executes the middleware succeeding the current middleware
      return
    }

    // Otherwise, Authorize as Municipality:
    const municipalityAccount = await prisma.municipalityAccount.findUnique({
      where: {id: id,},
    })
    if (!municipalityAccount) throw new Error('Invalid Token')
    const { password, ...accountWithoutPassword } = municipalityAccount
    if (!req.context) req.context = {}
    req.context.municipalityAccount = accountWithoutPassword
    next()
  } 
  catch (err) {
    res.status(400).send('Invalid Token')
  }
}
