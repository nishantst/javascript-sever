import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
import UserRepository from '../../Repositories/user/UserRepository';
import configuration from '../../config/configuration';
import * as bcrypt from 'bcrypt';

class UserController {
    userRepository: UserRepository = new UserRepository();
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    public async get(req: Request, res: Response, next: NextFunction) {

        const user = new UserRepository();
        const { id } = req.query;

        await user.getUser({ id })
            .then((data) => {
                if (data === null) {
                    throw '';
                }

                res.status(200).send({
                    message: 'User Fetched successfully',

                    data,

                    code: 200
                });

            })
            .catch(err => {
                console.log(err);
                res.send({
                    error: 'User not found',
                    code: 500
                });
            });

    }

    public async create(req: IRequest, res: Response, next: NextFunction) {
        const { id, name, email, role, password } = req.body;
        const user = new UserRepository();
        const creator = req.userData._id;
        await user.create({ id, name, email, role, password }, creator)
            .then(() => {
                res.status(200).send({
                    message: 'User Created Successfully!',
                    data: {
                        'id': id,
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
    public async me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside User Controller Login');

        const user = new UserRepository();
        const userData = await user.getUser({ email });
        if (userData) {
            const { password } = userData;
            bcrypt.compare(req.body.password, password, function (err, result) {
                if (err) { throw (err); }

                if (result) {
                    const token = jwt.sign(userData.toJSON(), configuration.KEY, {
                        expiresIn: Math.floor(Date.now() / 1000) + (15 * 60),
                    });

                    res.send({
                        data: token,
                        message: 'login successfully',
                        status: 200,

                    });
                } else {
                    res.send(
                        {
                            message: 'Incorrect password',
                            code: 403
                        }
                    );
                }
            });
        } else {
            res.send(
                {
                    message: 'Incorrect Email',
                    code: 403
                });
        }

    }
}


export default UserController.getInstance();
