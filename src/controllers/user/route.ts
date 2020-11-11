import * as express from 'express';
import UserController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const UserRouter = express.Router();

UserRouter.get('/get', authMiddleWare('getUser1', 'all'), validationHandler(validation.get),
    UserController.get);

UserRouter.post('/create', authMiddleWare('getUser1', 'all'), validationHandler(validation.create),
    UserController.create);

UserRouter.put('/update', authMiddleWare('getUser1', 'all'), validationHandler(validation.update),
    UserController.update);

UserRouter.delete('/:id', authMiddleWare('getUser1', 'all'), validationHandler(validation.delete),
    UserController.delete);

UserRouter.post('/login', validationHandler(validation.login), UserController.login);

UserRouter.get('/me', authMiddleWare('getUser1', 'read'), UserController.me);


export default UserRouter;
