import * as dotenv from 'dotenv';
import express, { Express, Request, Response } from "express";
import { loggerMiddleware } from "./logger";
import regionRouter from "./routes/region";
import rewardRouter from "./routes/reward";
import userRouter from "./routes/user";
import municipalRouter from "./routes/municipality";
import loginRouter from "./routes/login";

dotenv.config();

const app: Express = express();
const baseRouter = express.Router();
const port = process.env.PORT || 3001;

// TODO: Add CORS
// const cors = require('cors');
// app.use(cors({
//   origin: ['']
// }));

baseRouter.use("/user", userRouter);
baseRouter.use("/reward", rewardRouter);
baseRouter.use("/region", regionRouter);
baseRouter.use("/login", loginRouter);
baseRouter.use("/municipality", municipalRouter);

app.use(loggerMiddleware);
app.use("/api", baseRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
