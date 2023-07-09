import { Municipality, MunicipalityAccount, User, UserAccount } from '@prisma/client'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import { loggerMiddleware } from './logger'
import authMiddleware from './middleware/auth'
import fraudMiddleware from './middleware/fraud'
import unless from './middleware/unless'
import disposalSiteRouter from './routes/disposalSite'
import litterSiteRouter from './routes/litterSite'
import municipalRouter from './routes/municipality'
import regionRouter from './routes/region'
import rewardRouter from './routes/reward'
import userRouter from './routes/user'
dotenv.config()

const app: Express = express()
const baseRouter = express.Router()
const port = process.env.PORT || 3001

const unauthedRoutes = [
  '/api/user/register',
  '/api/user/login',
  '/api/municipality/register',
  '/api/municipality/login',
]

baseRouter.use('/user', userRouter)
baseRouter.use('/reward', rewardRouter)
baseRouter.use('/region', regionRouter)
baseRouter.use('/municipality', municipalRouter)
baseRouter.use('/litter-site', litterSiteRouter)
baseRouter.use('/disposal-site', disposalSiteRouter)

app.use(cors())
app.use(express.json({ limit: '5mb' }))
app.use(loggerMiddleware)
app.use(unless(unauthedRoutes, authMiddleware))
app.use(fraudMiddleware)
app.use('/api', baseRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

export type UserAccountWithoutPassword = Omit<UserAccount, 'password'>
export type MunicipalityAccountWithoutPassword = Omit<MunicipalityAccount, 'password'>
interface RequestContext {
  userAccount?: UserAccountWithoutPassword
  municipalityAccount?: MunicipalityAccountWithoutPassword
}

// Add context types to Express Request
declare global {
  namespace Express {
    interface Request {
      context: RequestContext
    }
  }
}
