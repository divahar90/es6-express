import express from 'express';
import userRouter from './user/user.routes';
import config from './config';

const router = express.Router();

router.use(`/api/${config.apiVersion}`, userRouter);

export default router;