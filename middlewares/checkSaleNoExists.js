const { ObjectID } = require('mongodb');
const { getById } = require('../models/sales.models');

const STATUS_ERROR = 404;
const STATUS_FORMAT_ERROR = 422;
const ERROR_NO_EXISTS = {
  err: {
    code: 'not_found',
    message: 'Sale not found',
  },
};
const ERROR_ID = {
  err: {
    code: 'invalid_data',
    message: 'Wrong sale ID format',
  },
};

const checkSaleById = async (req, res, next) => {
  const { id } = req.params;
  // console.log(!ObjectID.isValid(id));
  if (!ObjectID.isValid(id)) return res.status(STATUS_ERROR).json(ERROR_NO_EXISTS);
  const saleNoExists = await getById(id);
  
  if (!saleNoExists) return res.status(STATUS_ERROR).json(ERROR_NO_EXISTS);

  next();
};

const checkIdFormat = async (req, res, next) => {
  const { id } = req.params;
  const saleExist = await getById(id);
  
  if (typeof saleExist !== 'object') return res.status(STATUS_FORMAT_ERROR).json(ERROR_ID);

  next();
};

module.exports = { checkSaleById, checkIdFormat };
