const SERVER_ERROR_STATUS = 500;
const MESSAGE_ERROR = { message: 'Internal Server Error' };

const errorMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(SERVER_ERROR_STATUS).json(MESSAGE_ERROR);
  }
};

module.exports = errorMiddleware;
