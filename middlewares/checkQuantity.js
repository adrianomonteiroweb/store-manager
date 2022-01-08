const ERROR_STATUS = 422;
const ERROR_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
};

const checkQuantity = async (req, res, next) => {
  const { quantity } = req.body;
  if (quantity < 1 || typeof quantity !== 'number') {
    return res.status(ERROR_STATUS).json(ERROR_MESSAGE);
  }

  next();
};

module.exports = checkQuantity;
