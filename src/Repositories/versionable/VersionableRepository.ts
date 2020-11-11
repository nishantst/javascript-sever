import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }

    public static generateObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public count() {
        return this.model.countDocuments();
    }
    public findOne(query) {
        return this.model.findOne(query).lean();
    }
    protected find(query = {}): DocumentQuery<D[], D> {
        return this.model.find(query);
    }


    public createUser(data: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();

        const model = {
            _id: id,
            originalId: id,
            ...data,

        }
        console.log('data: ', data)
        console.log('model: ', model)

        return this.model.create(model)
    }



    public getUser(data: any) {
        return this.model.findOne(data);
    }

    public update(id, dataToUpdate: any) {

        return new Promise((resolve, reject) => {
            let originalData;
            this.findOne({ id: id, updatedAt: null, deletedAt: null }).lean()
                .then((data) => {
                    if (data === null) {
                        console.log('data:', data)
                        throw '';
                    }
                    console.log(data)
                    originalData = data;
                    const newId = VersionableRepository.generateObjectId();
                    const oldId = originalData._id;

                    const oldModel = {
                        ...originalData,
                        updatedAt: Date.now(),
                        deletedAt: Date.now()
                    };


                    const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), dataToUpdate);

                    newData._id = newId;
                    newData.createdAt = Date.now();
                    console.log(newData);


                    this.model.updateOne({ _id: oldId }, oldModel)
                        .then((result) => {
                            if (result === null) {
                                throw ''
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                    this.model.create(newData);

                    resolve(undefined);

                })
                .catch((err) => {
                    reject(err);
                });

        });

    }


    public delete(idToBeDeleted) {
        return new Promise((resolve, reject) => {
            let originalData;

            this.findOne({ id: idToBeDeleted, deletedAt: null }).lean()
                .then((data) => {
                    if (data === null) {
                        throw '';
                    }

                    originalData = data;
                    const oldId = originalData._id;

                    const modelDelete = new this.model({
                        ...originalData,
                        deletedAt: Date.now()
                    });

                    this.model.updateOne({ _id: oldId }, modelDelete)
                        .then((result) => {
                            if (result === null) {
                                throw ''
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                    resolve(undefined);

                })
                .catch((err) => {
                    reject(err)
                });
        });
    }

}
