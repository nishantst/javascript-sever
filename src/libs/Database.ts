import * as mongoose from 'mongoose';
import seedData from './seedData';

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seedData();
                resolve(undefined);
            });
        });
    }

    static disconnect() {
        mongoose.disconnect((err) => {
            if (err) {
                console.log(err);
            }
            console.log('MongoDB connection close');
        });
    }
}

export default Database;
