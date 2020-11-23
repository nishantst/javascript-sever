import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersinableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt';

export default class UserRepository extends VersinableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectID() {
        return String(mongoose.Types.ObjectId());
    }

    constructor() {
        super(userModel);
    }

    public create(data, creator) {
        const rawPassword = data.password;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(rawPassword, salt);
        data.password = hashedPassword;
        return super.createUser(data, creator);
    }

    public updateUser(id, data, updator) {
        if ('password' in data) {
            const rawPassword = data.password;
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(rawPassword, salt);
            data.password = hashedPassword;
        }
        return super.update(id, data, updator);
    }
    public count() {
        return super.count();
    }
    public findOne(data) {
        return super.findOne(data);
    }
    public find(query) {
        return super.find(query);
    }
    public delete(data, deletor) {
        return super.delete(data, deletor);
    }
    public getUser(data) {
        return super.getUser(data);
    }
    public getallTrainee(skip, limit, sort) {
        return super.getallTrainee(skip, limit, sort);
    }

}
