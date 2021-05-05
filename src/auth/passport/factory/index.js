const { getPassport } = require('../index');
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
    ([strategyName, { Strategy, options }]) => {
        const credentials = getStrategyOptions(strategyName, getCredentials)
        passport.use(generateOAuthStrategy(Strategy, credentials, oAuthCallback))
        return {strategyName, options }
    }
)

const buildOAuthPassportApplication = (passportLib) => {
    const {passport, oAuthCallback} = getPassport(passportLib);
    const strategiesOptions = Object.entries(ALLOWED_STRATEGIES)
        .filter(([_, { isEnabled }]) =>  isEnabled)
        .map(implementsStrategyOnPassport(passport, oAuthCallback));
    return { passport, strategiesOptions };
}

module.exports = { buildOAuthPassportApplication }