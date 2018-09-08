import express from 'express';
import sessionRouter from './session/user.session.routes';

const router = express.Router();

router.use('/session', sessionRouter);

export default router;