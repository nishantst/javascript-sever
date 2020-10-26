const enVars = require ('dotenv').config();

console.log('Inside config', enVars);

const config: IConfig = enVars;
Object.freeze(config);

export default config;