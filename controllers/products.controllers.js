const status = require('http-status-codes').StatusCodes;
const {
  createdProduct,
  getAll,
  getById,
  setProduct,
} = require('../services/products.services');

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

const searchById = async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await getById(id);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return product
  ? res.status(status.OK).json(product)
  : res.status(status.UNPROCESSABLE_ENTITY).json(NOT_FOUND_ERROR);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  let product;
  try {
    product = await setProduct(id, name, quantity);
  } catch (err) {
    return res.status(status.BAD_REQUEST).json({ message: err.message });
  }
  return product
  ? res.status(status.OK).json(product)
  : res.status(status.NOT_FOUND).json(NOT_FOUND_ERROR);
};

module.exports = {
  insertProduct,
  searchAll,
  searchById,
  updateProduct,
};
