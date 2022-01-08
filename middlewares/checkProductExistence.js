const products = require('../services/products.services');

const NAME_STATUS_ERROR = 422;
const JSON_ERROR_PRODUCT = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
};

const checkProductExistence = async (req, res, next) => {
  const { name } = req.body;
  if (products(name).name === name) {
    res.status(NAME_STATUS_ERROR).json(JSON_ERROR_PRODUCT);
  }
  next();
};

module.exports = checkProductExistence;
