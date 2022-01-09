const { getProductByName } = require('../models/products.models');

const NAME_STATUS_ERROR = 422;
const ERROR_LENGTH = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
};
const ERROR_EXISTS = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
};

const checkNameLength = async (req, res, next) => {
  const { name } = req.body;
  if (typeof name !== 'string' || name.length < 6) {
    return res.status(NAME_STATUS_ERROR).json(ERROR_LENGTH);
  }
  next();
};

const checkNameAlreadyExists = async (req, res, next) => {
  const { name } = req.body;
  const search = await getProductByName(name);

  const exists = search.some((object) => object.name === name);

  if (exists) return res.status(NAME_STATUS_ERROR).json(ERROR_EXISTS);

  next();
};

module.exports = {
  checkNameLength,
  checkNameAlreadyExists,
};
