const { createdProduct } = require('../services/products.services');

const CREATED_STATUS = 201;

const insertProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const product = await createdProduct(name, quantity);
  
    return res.status(CREATED_STATUS).json(product);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

module.exports = { insertProduct };
