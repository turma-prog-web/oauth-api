const { buildOAuthPassportApplication } = require("../passport/factory");
const { initializeOAuthRoutes } = require('../routes')
const controller = require('../controllers')

const initalizePassport = (app, passport) => {
    app.use(passport.initialize());
    app.use(passport.session());
    return {app, passport};
}

const buildOAuthApi = (expressAplication, passportLib) => {
    const { app, passport } = initalizePassport(expressAplication, passportLib);
    const passportOptions = buildOAuthPassportApplication(passport);
    return initializeOAuthRoutes(expressAplication, passportOptions, controller);
}

module.exports = { buildOAuthApi }