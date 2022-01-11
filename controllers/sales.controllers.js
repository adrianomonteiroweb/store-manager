const status = require('http-status-codes').StatusCodes;

const {
  createdSale,
  getAllSales,
  getSaleById,
  setSaleById,
} = require('../services/sales.services');

const NOT_FOUND_ERROR = { message: 'net_found' };
const ERROR_FORMAT = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

const insertSales = async (req, res) => {
  let sale;
  try {
    sale = await createdSale(req.body);
    // console.log(req.body);
  } catch (err) {
    return res.status(status.BAD_REQUEST).json({ message: err.message });
  }
  return sale
  ? res.status(status.OK).json(sale)
  : res.status(status.NOT_FOUND).json(NOT_FOUND_ERROR);
};

const getAll = async (_req, res) => {
  let sales;
  try {
    sales = await getAllSales();
    // console.log(sales);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return sales
    ? res.status(status.OK).json(sales)
    : res.status(status.UNPROCESSABLE_ENTITY).json(NOT_FOUND_ERROR);
};

const getById = async (req, res) => {
  const { id } = req.params;
  let sale;
  try {
    sale = await getSaleById(id);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return sale
  ? res.status(status.OK).json(sale)
  : res.status(status.UNPROCESSABLE_ENTITY).json(NOT_FOUND_ERROR);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  let sale;
  try {
    sale = await setSaleById(id, req.body);
    console.log(req.body);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  console.log(sale[0]);
  return sale
  ? res.status(status.OK).json(sale[0])
  : res.status(status.UNPROCESSABLE_ENTITY).json(NOT_FOUND_ERROR);
};

module.exports = {
  insertSales,
  getAll,
  getById,
  updateSale,
};
