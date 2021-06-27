const { buildOAuthPassportApplication } = require('../passport/factory');
const { initializeOAuthRoutes } = require('../routes');
const controller = require('../controllers');
const logger = require('../../helpers/logger');

const initalizePassport = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());
  return { app, passport };
};

const buildOAuthApi = (expressAplication, passportLib) => {
  logger.info('initialize passport application');
  const { app, passport } = initalizePassport(expressAplication, passportLib);
  const passportOptions = buildOAuthPassportApplication(passport);
  logger.info('initialize oAuth routes');
  return initializeOAuthRoutes(app, passportOptions, controller);
};

module.exports = { buildOAuthApi };
