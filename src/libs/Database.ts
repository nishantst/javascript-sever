import * as mongoose from 'mongoose';

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(undefined);
            });
        });
    }

    static disconnect() {
        console.log('Inside disconnect method');
        mongoose.disconnect((err) => {
            if (err) {
                console.log(err);
            }
            console.log('MongoDB connection close');
        });
    }
}

export default Database;
