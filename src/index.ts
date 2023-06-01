import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
