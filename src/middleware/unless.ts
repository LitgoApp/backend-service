import { NextFunction, Request, Response } from 'express'

export default function unless(
  path: string[],
  middleware: (req: Request, res: Response, next: NextFunction) => void
) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (path.includes(req.path)) {
      return next()
    } else {
      return middleware(req, res, next)
    }
  }
}
