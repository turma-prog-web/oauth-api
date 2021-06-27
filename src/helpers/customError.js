const { PRECONDITION_FAILED } = require('./http-status-code');

const error = {
  preconditionFiled: {
    statusCode: PRECONDITION_FAILED,
    message: 'PRECONDITION FAILED',
    description:
      'One or more conditions given in the request header fields evaluated to false when tested on the server.',
  },
};

module.exports = error;
