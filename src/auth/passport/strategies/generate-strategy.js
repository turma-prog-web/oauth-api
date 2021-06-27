const generateOAuthStrategy = (
  Strategy,
  credentials = {},
  callback = () => {}
) => new Strategy({ ...credentials }, callback);

const getStrategyOptions = (
  strategyName = '',
  getCredentials,
  options = {}
) => {
  const credentials = getCredentials(strategyName);
  return { ...credentials, scope: 'user:email', ...options };
};

module.exports = { generateOAuthStrategy, getStrategyOptions };
