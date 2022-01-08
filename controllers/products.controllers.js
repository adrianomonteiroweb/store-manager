const status = require('http-status-codes').StatusCodes;
const { createdProduct, getAll } = require('../services/products.services');

const NOT_FOUND_ERROR = { message: 'NOT FOUND' };
const ERROR_FORMAT = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

const insertProduct = async (req, res) => {
  const { name, quantity } = req.body;
  let product;
  try {
    product = await createdProduct(name, quantity);
  } catch (err) {
    return res.status(status.BAD_REQUEST).json({ message: err.message });
  }
  if (product) console.log(product);
  return product
  ? res.status(status.CREATED).json(product)
  : res.status(status.NOT_FOUND).json(NOT_FOUND_ERROR);
};

const searchAll = async (_req, res) => {
  let products;
  try {
    products = await getAll();
    // console.log(products);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return products
    ? res.status(status.OK).json(products)
    : res.status(status.UNPROCESSABLE_ENTITY).json(NOT_FOUND_ERROR);
};

module.exports = {
  insertProduct,
  searchAll,
};
