import { Request, Response, NextFunction } from 'express';

export default (err: IError, req: Request, res: Response, next: NextFunction) => {

    res.status(err.code).json(
    {
        error: err.error,
        status: err.code,
        message: err.message || 'Error',
        timestamp: new Date ()
    }
);
};