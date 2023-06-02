import * as dotenv from 'dotenv';
import { Express, Request, Response } from 'express';
const express = require('express');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const user = require('./routes/user');
const reward = require('./routes/reward');

// TODO: Add CORS
// const cors = require('cors');
// app.use(cors({
//   origin: ['']
// }));

app.use('/api/user', user);
app.use('/api/reward', reward);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
