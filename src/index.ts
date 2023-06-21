import { Municipality, User } from '@prisma/client'
import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import { loggerMiddleware } from './logger'
import { auth } from './middleware/auth'
import unless from './middleware/unless'
import litterSiteRouter from './routes/litterSite'
import municipalRouter from './routes/municipality'
import regionRouter from './routes/region'
import rewardRouter from './routes/reward'
import userRouter from './routes/user'
dotenv.config()

const app: Express = express()
const baseRouter = express.Router()
const port = process.env.PORT || 3001

// TODO: Add CORS
// const cors = require('cors');
// app.use(cors({
//   origin: ['']
// }));

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

app.use(express.json({ limit: '5mb' }))
app.use(loggerMiddleware)
app.use(unless(unauthedRoutes, auth))
app.use('/api', baseRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})

export type UserWithoutPassword = Omit<User, 'password'>
export type MunicipalityWithoutPassword = Omit<Municipality, 'password'>
interface RequestContext {
  user?: UserWithoutPassword
  municipality?: MunicipalityWithoutPassword
}

// Add context types to Express Request
declare global {
  namespace Express {
    interface Request {
      context: RequestContext
    }
  }
}
