const enVars = require ('dotenv').config();

const config: IConfig = enVars;
Object.freeze(config);

export default config;