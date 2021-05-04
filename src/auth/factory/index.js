const { getPassport } = require('../passport/index');
const { 
    ALLOWED_STRATEGIES, 
    generateOAuthStrategy,
    getStrategyOptions 
} = require('../strategies/index')

const getCredentials = (strategyName) => {
    const clientID = process.env[`${strategyName}_CLIENT_ID`] || ''
    const clientSecret=  process.env[`${strategyName}_CLIENT_SECRET`] || ''
    const callbackURL = process.env[`${strategyName}_CLIENT_CALLBACK_URL`] || '' 
    return {clientID, clientSecret, callbackURL }
}

const implementsStrategyOnPassport = (passport, oAuthCallback) => (
    ([strategyName, Strategy]) => {
        const credentials = getStrategyOptions(strategyName, getCredentials)
        passport.use(generateOAuthStrategy(Strategy, credentials, oAuthCallback))
    }
)

const buildOAuthPassportApplication = (passportLib) => {
    const {passport, oAuthCallback} = getPassport(passportLib);
    Object.entries(ALLOWED_STRATEGIES)
        .forEach(implementsStrategyOnPassport(passport, oAuthCallback));
    return passport
}

module.exports = { buildOAuthPassportApplication }