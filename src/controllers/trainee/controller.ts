import { Request, Response, NextFunction } from 'express';
import IRequest from '../../IRequest';
import UserRepository from '../../Repositories/user/UserRepository';
class TraineeController {
static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    public async getAll(req: IRequest, res: Response, next: NextFunction) {

        let skip: number;
        let limit: number;
        let sort: boolean;
        let search: string = '';

        if ('limit' in req.query) {
            limit = Number(req.query.limit);
        }
        else {
            limit = 10;
        }

        if ('skip' in req.query) {
            skip = Number(req.query.skip);
        }
        else {
            skip = 0;
        }


        if ('sort' in req.query) {
            if (req.query.sort === 'true') {
                sort = true;
            }
            else {
                sort = false;
            }
        }
        else {
            sort = false;
        }

        if ('search' in req.query) {
            search = req.query.search;
        }

        const query: any = {
            deletedAt: { $exists: false },
            updatedAt: { $exists: false },
            role: 'trainee',
            $or: [
                {
                    name: {
                        $regex: search,
                        $options: 'i'
                    }
                },
                {
                    email: {
                        $regex: search,
                        $options: 'i'
                    }
                }
            ]
        };

        const options: any = {
            skip: skip,
            limit: limit
        };

        let sortQuery: any;

        if (sort) {
            sortQuery = {
                name: 1,
                email: 1
            };
        }
        else {
            sortQuery = {
                createdAt: -1
            };
        }

        const user = new UserRepository();

        await user.getAllTrainee(query, options, sortQuery)
            .then((data) => {
                if (data.count === 0) {
                    throw '';
                }
                res.status(200).send({
                    status: 'ok',
                    message: 'Fetched successfully',
                    Trainees: { data }
                });
            })
            .catch((err) => {
                res.status(404).send({
                    message: 'Trainee Not Found',
                    status: 404,
                    timestamp: new Date()
                });
            });
        }
        public async create(req: IRequest, res: Response, next: NextFunction) {
        const {  name, email, role, password } = req.body;
        const user = new UserRepository();
        const creator = req.userData._id;
        await user.create({  name, email, role, password }, creator)
            .then(() => {
                res.status(200).send({
                    message: 'User Created Successfully!',
                    data: {
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password

                    },
                    code: 200
                });
            })
            .catch((err) => {
                next({
                    error: 'User not created',
                    code: 404
                });
            });
    }
    public update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        const user = new UserRepository();
        const updator = req.userData._id;
        user.updateUser(id, dataToUpdate, updator)
            .then((result) => {

                res.status(200).send({
                    message: 'User Updated',
                    code: 200
                });
            })
            .catch((err) => {
                next({
                    error: 'User Not Found for update',
                    code: 404
                });
            });
    }

    public async delete(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        const user = new UserRepository();
        const deletor = req.userData._id;
        await user.delete(id, deletor)
            .then((result) => {
                res.send({
                    message: 'Deleted successfully',
                    code: 200
                });
            })
            .catch((err) => {
                next({
                    error: 'User not found to be deleted',
                    code: 404
                });
            });
        }
    }


export default TraineeController.getInstance();
