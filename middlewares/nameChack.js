const NAME_STATUS_ERROR = 422;
const JSON_ERROR_NAME = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
};

const nameCheck = async (req, res, next) => {
  const { name } = req.body;
  if (typeof name !== 'string' || name.length < 6) {
    res.status(NAME_STATUS_ERROR).json(JSON_ERROR_NAME);
  }
  next();
};

module.exports = nameCheck;
