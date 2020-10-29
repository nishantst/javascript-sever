import * as express from 'express';

import traineeController from './controller';

const traineeRouter = express.Router();

traineeRouter.route('/')
.get(traineeController.get)
.post(traineeController.create)
.put(traineeController.update)
.delete(traineeController.delete);

export default traineeRouter;