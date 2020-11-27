import * as express from 'express';

import traineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = express.Router();

traineeRouter.route('/')
.get(authMiddleWare('getUser1', 'all'), validationHandler(validation.get), traineeController.getAll)
.post(authMiddleWare('getUser1', 'all'), validationHandler(validation.create), traineeController.create)
.put(authMiddleWare('getUser1', 'all'), validationHandler(validation.update), traineeController.update);
traineeRouter.route('/:id')
.delete(authMiddleWare('getUser1', 'all'), validationHandler(validation.delete), traineeController.delete);

export default traineeRouter;
