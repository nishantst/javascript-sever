import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersinableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersinableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectID() {
        return String(mongoose.Types.ObjectId());
    }

    constructor() {
        super(userModel);
    }

    public create(data) {
        return super.createUser(data);
    }

    public count() {
        return super.count();
    }

    public updateUser(id, data) {
        return super.update(id, data);
    }
    public findOne(data) {
        return super.findOne(data);
    }
    public find(query) {
        return super.find(query);
    }
    public delete(data) {
        return super.delete(data);
    }
    public getUser(data) {
        return super.getUser(data);
    }

}
