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

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const data = req.userData;
        res.json({
            message: 'Me',
            status: 'ok',
            data
        });
    }
    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside User Controller Login');

        const user = new UserRepository();
        const userData = await user.getUser({ email, updatedAt: null, deletedAt: null });
        if (userData) {
            const { password } = userData;
          bcrypt.compare(req.body.password, password, function (err, result) {
                if (err) { throw (err); }

                if (result) {
                    const token = jwt.sign(userData.toJSON(), configuration.KEY, {
                        expiresIn: Math.floor(Date.now() / 1000) + (15 * 60),
                    });
                    res.send({
                        message: 'Authorisation token',
                        status: 'ok',
                        data: token,

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
                    message: 'User not found',
                    code: 403
                });
        }
    }
}
export default UserController.getInstance();
