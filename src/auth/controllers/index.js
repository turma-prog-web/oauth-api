const querystring = require('querystring');
const logger = require('../../helpers/logger');
const customError = require('../../helpers/customError');
const todoApiUrl = process.env.TODO_API_URL;

const getUrlToRedirect = (key, payload) => {
  const query = querystring.stringify({ [key]: JSON.stringify(payload) });
  return `${todoApiUrl}?${query}`;
};

const authenticate = (req, res) => {
  if (!req.user) {
    const { preconditionFiled } = customError;
    logger.error(preconditionFiled);
    return res.redirect(getUrlToRedirect('error', preconditionFiled));
  }
  const user = handlerUserInformations(req.user);
  return res.redirect(getUrlToRedirect('user', user));
};

const handlerUserInformations = (user) => ({
  name: user.provider == 'github' ? user.username : user.displayName,
  code: user.id,
  email: user?.emails[0]?.value || '',
  picture: user.photos[0]?.value,
  active: true,
});

module.exports = { authenticate };
