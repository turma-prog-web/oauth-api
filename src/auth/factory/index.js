const { buildOAuthPassportApplication } = require("../passport/factory");
const { initializeOAuthRoutes } = require('../routes')
const controller = require('../controllers')


const buildOAuthApi = (app, passport) => {
    const passportOptions = buildOAuthPassportApplication(passport);
    return initializeOAuthRoutes(app, passportOptions, controller);
}

module.exports = { buildOAuthApi }