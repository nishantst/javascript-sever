import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { userModel } from '../../Repositories/user/UserModel';
import IRequest from '../../IRequest';
class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside get method of User');
            res.send({
                message: 'User fetched succefully',
                data: {
                    name: 'user1',

                }
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside post method of Trainee');
            res.send({
                message: 'User created succefully',
                data: {
                    name: 'user1',

                }
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside put method of Trainee');
            res.send({
                message: 'Trainee updated succefully',
                data: {
                    name: 'user1',

                }
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside delete method of Trainee');
            res.send({
                message: 'Trainee deleted succefully',
                data: {
                    name: 'user1',

                }

            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }

    me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            data
        });
    }

    login(req: Request, res: Response, next: NextFunction) {

        console.log('Inside User Controller Login');
        const { email, password } = req.body;
        userModel.findOne({ email: email },  (err, result) => {
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
