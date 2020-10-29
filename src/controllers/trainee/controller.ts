import { Request, Response, NextFunction } from 'express';
class TraineeController {
static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get (req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside get method of Trainee');
            res.send({
                message: 'Trainee fetched succefully',
                data : {
                        name: 'Trainee1',
                        address: 'Noida'
                    }
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    create (req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside post method of Trainee');
            res.send({
                message: 'Trainee created succefully',
                data : {
                        name: 'Trainee1',
                        address: 'Noida'
                    }
                });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    update (req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside put method of Trainee');
            res.send({
                message: 'Trainee updated succefully',
                data : {
                        name: 'Trainee1',
                        address: 'Noida'
                    }
                });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete (req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside delete method of Trainee');
            res.send({
                message: 'Trainee deleted succefully',
                data : {
                        name: 'Trainee1',
                        address: 'Noida'
                    }
                });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
}

export default TraineeController.getInstance();