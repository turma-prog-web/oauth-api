require('./config').initializeEnvironmentVariables('.env');
const express = require('express');
const passportLib = require('passport');
const logger = require('./helpers/logger');
const { buildOAuthApi } = require('./auth');
const { app, passport } = buildOAuthApi(express(), passportLib);
const { PORT } = process.env;

app.listen(+PORT, () => {
  logger.info(`oauth microservice running at the port ${PORT}`);
});
