import * as express from 'express';
import UserController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const UserRouter = express.Router();

UserRouter.get('/', validationHandler(validation.get),
    UserController.get);

UserRouter.post('/', validationHandler(validation.create),
    UserController.create);

UserRouter.put('/', validationHandler(validation.update),
    UserController.update);

UserRouter.delete('/:id', validationHandler(validation.delete),
    UserController.delete);

UserRouter.post('/login', validationHandler(validation.login), UserController.login);

UserRouter.get('/me', authMiddleWare('getUser1', 'all'), UserController.me);


export default UserRouter;
