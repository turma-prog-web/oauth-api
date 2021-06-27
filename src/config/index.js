const path = require('path');
const dotenv = require('dotenv');
const logger = require('../helpers/logger');
const getEnvPath = (envFilename) => path.join('environments', envFilename);

const initializeEnvironmentVariables = (envFilename) => {
  const envPath = getEnvPath(envFilename);
  logger.info('initialize environment variables');
  return dotenv.config({ path: envPath });
};

module.exports = { initializeEnvironmentVariables, getEnvPath };
