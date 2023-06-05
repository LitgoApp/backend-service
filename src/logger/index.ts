import { NextFunction, Request, Response } from 'express'
import winston from 'winston'

const format = winston.format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`
})

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    format
  ),
})

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`REQUEST: ${req.method} ${req.path}`)
  res.on('finish', () => {
    const response = `RESPONSE: ${res.statusCode} ${res.statusMessage}`
    if (res.statusCode >= 500) {
      logger.error(response)
    } else if (res.statusCode >= 400) {
      logger.warn(response)
    } else {
      logger.info(response)
    }
  })

  next()
}

export default logger
