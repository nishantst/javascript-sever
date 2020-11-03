import { config } from 'dotenv';

config();

const configuration: IConfig = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
};


export default Object.freeze(configuration);