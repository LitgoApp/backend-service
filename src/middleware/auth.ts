import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '@prisma/client';

interface RequestWithUser extends Request {
  user: User;
}

export const auth = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
    req.user = verified as User;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};
