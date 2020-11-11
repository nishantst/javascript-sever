import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { userModel } from '../../Repositories/user/UserModel';
import IRequest from '../../IRequest';
import UserRepository from '../../Repositories/user/UserRepository';
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

    get = (req: Request, res: Response, next: NextFunction) => {

        const user = new UserRepository();
        const { id } = req.query;

        user.getUser({ id })
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

    public create(req: Request, res: Response, next: NextFunction) {
        const { id, name } = req.body;
        const user = new UserRepository();
        user.createUser({ id, name })
            .then(() => {
                res.status(200).send({
                    message: 'User Created Successfully!',
                    data: {
                        'id': id,
                        'name': name,

                    },
                    code: 200
                });
            })
            .catch(err => {
                console.log(err);
                res.send({
                    error: 'User not created',
                    code: 500
                });
            });
    }
    public update = (req: Request, res: Response, next: NextFunction) => {
        const { id, dataToUpdate } = req.body;
        const user = new UserRepository();
        user.updateUser(id, dataToUpdate)
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

    public delete(req: IRequest, res: Response, next: NextFunction) {
        const id = req.params.id;
        const user = new UserRepository();
        user.delete(id)
            .then(() => {
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
    public me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }

    public login(req: Request, res: Response, next: NextFunction) {

        console.log('Inside User Controller Login');
        const { email, password } = req.body;
        userModel.findOne({ email: email }, (err, result) => {
            if (result) {
                if (password === result.password) {
                    console.log('result is', result);
                    const token = jwt.sign(result.toJSON(), 'qwertyuiopasdfghjklzxcvbnm123456');
                    res.send({
                        data: token,
                        message: 'login successfully',
                        status: 200,

                    });

                }
                else {
                    next(
                        {
                            message: 'Incorrect password',
                            code: 403
                        }
                    );
                }

            }
            else {
                res.send(
                    {
                        message: 'Incorrect Email',
                        code: 403
                    }
                );

            }
        });
    }
}

export default UserController.getInstance();
