const { create } = require('../models/products.models');

const createdProduct = async (name, quantity) => {
  const newProductId = await create(name, quantity);

  const newProduct = {
    id: newProductId,
    name,
    quantity,
  };

  return newProduct;
};

module.exports = { createdProduct };
