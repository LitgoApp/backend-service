import { Municipality, User } from '@prisma/client'
import * as dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
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

app.use(express.json())
app.use(loggerMiddleware)
app.use(unless(unauthedRoutes, auth))
app.use('/api', baseRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

interface RequestContext {
  user?: User
  municipality?: Municipality
}

// Add context types to Express Request
declare global {
  namespace Express {
    interface Request {
      context: RequestContext
    }
  }
}
