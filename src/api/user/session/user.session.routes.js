import express from 'express';
import SessionController from './user.session.controller';

const loginRouter = express.Router();

loginRouter.get('/login', function(req,res){   
    let sessionController = new SessionController();
    sessionController.login(req,res);
});

export default loginRouter;