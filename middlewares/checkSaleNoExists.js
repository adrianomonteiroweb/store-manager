const { ObjectID } = require('mongodb');
const { getById } = require('../models/sales.models');

const STATUS_ERROR = 404;
const ERROR_NO_EXISTS = {
  err: {
    code: 'not_found',
    message: 'Sale not found',
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

module.exports = checkSaleById;
