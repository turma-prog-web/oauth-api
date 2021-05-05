const path = require('path');
const dotenv = require('dotenv');

const getEnvPath = (envFilename) => 
    path.join('environments', envFilename);


const initializeEnvironmentVariables = (envFilename) => {
    const envPath = getEnvPath(envFilename);
    return dotenv.config({path: envPath});
}

module.exports = { initializeEnvironmentVariables, getEnvPath };
