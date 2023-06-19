import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  // TODO get all litter sites, potentially based on location
  res.sendStatus(501)
})

router.get('/:id', async (req: Request, res: Response) => {
  // TODO get litter site by id
  res.sendStatus(501)
})

router.post('/', async (req: Request, res: Response) => {
  // TODO create litter site
  res.sendStatus(501)
})

router.put('/:id', async (req: Request, res: Response) => {
  // TODO update litter site
  res.sendStatus(501)
})

router.delete('/:id', async (req: Request, res: Response) => {
  // TODO delete litter site
  res.sendStatus(501)
})

export default router
