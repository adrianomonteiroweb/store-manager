const ERROR_STATUS = 422;
const ERROR_MESSAGE_LENGTH = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
};
const ERROR_MESSAGE_TYPE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be a number',
  },
};

const checkQuantityType = async (req, res, next) => {
  const { quantity } = req.body;
  if (typeof quantity !== 'number') {
    return res.status(ERROR_STATUS).json(ERROR_MESSAGE_TYPE);
  }

  next();
};

const checkQuantityLength = async (req, res, next) => {
  const { quantity } = req.body;
  if (quantity < 1) {
    return res.status(ERROR_STATUS).json(ERROR_MESSAGE_LENGTH);
  }

  next();
};

module.exports = {
  checkQuantityType,
  checkQuantityLength,
};
