const status = require('http-status-codes').StatusCodes;
const { createdProduct } = require('../services/products.services');

const NOT_FOUND_ERROR = { message: 'NOT FOUND' };

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

module.exports = { insertProduct };
