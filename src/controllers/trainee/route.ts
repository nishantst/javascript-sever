import * as express from 'express';

import traineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = express.Router();

traineeRouter.route('/')
    .get(authMiddleWare('getUser1', 'read'), validationHandler(validation.get), traineeController.get)
    .post(authMiddleWare('getUser1', 'write'), validationHandler(validation.create), traineeController.create)
    .put(authMiddleWare('getUser2', 'write'), validationHandler(validation.update), traineeController.update)
    .delete(authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete), traineeController.delete);

traineeRouter.route('/:id')
    .delete(authMiddleWare('getUser2', 'delete'), validationHandler(validation.delete), traineeController.delete);

export default traineeRouter;
