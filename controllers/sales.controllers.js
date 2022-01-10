const status = require('http-status-codes').StatusCodes;

const { createdSale } = require('../services/sales.services');

const NOT_FOUND_ERROR = { message: 'NOT FOUND' };
// const ERROR_FORMAT = {
//   err: {
//     code: 'invalid_data',
//     message: 'Wrong id format',
//   },
// };

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

module.exports = {
  insertSales,
};
