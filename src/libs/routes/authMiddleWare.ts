import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { hasPermission } from '../permission';
import IRequest from '../../IRequest';

export default (moduleName, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
    try {
        console.log('the config is', req.headers.authorization);
        const token = req.headers['authorization'];
        const decodedUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        if (hasPermission(moduleName, decodedUser.role, permissionType)) {
            console.log(moduleName, decodedUser.role, permissionType);
            console.log('user is', decodedUser);
            req.userData = decodedUser;
            next();
        } else {
            next(
                {
                    message: 'Unauthorised Access',
                    code: 403
                }
            );
        }
    } catch (err) {
        next(
            {
                message: 'Unauthorised Access',
                code: 403
            }
        );
    }
};
