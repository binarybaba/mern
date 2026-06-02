import express from 'express';
const app = express();

import userRouter from './routes/user.routes';
app.use(express.json());
app.use('/users', userRouter)

export { app };