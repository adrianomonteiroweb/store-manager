const { getProductByName, getProductById } = require('../models/products.models');

const STATUS_ERROR = 422;
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
const ERROR_ID = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

const checkNameLength = async (req, res, next) => {
  const { name } = req.body;
  if (typeof name !== 'string' || name.length < 6) {
    return res.status(STATUS_ERROR).json(ERROR_LENGTH);
  }
  next();
};

const checkNameAlreadyExists = async (req, res, next) => {
  const { name } = req.body;
  const search = await getProductByName(name);

  const exists = search.some((object) => object.name === name);

  if (exists) return res.status(STATUS_ERROR).json(ERROR_EXISTS);

  next();
};

const checkProductById = async (req, res, next) => {
  const { id } = req.params;
  const productExist = await getProductById(id);
  
  if (typeof productExist !== 'object') return res.status(STATUS_ERROR).json(ERROR_ID);

  next();
};

module.exports = {
  checkNameLength,
  checkNameAlreadyExists,
  checkProductById,
};
