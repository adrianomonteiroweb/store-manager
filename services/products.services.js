const { create, getProduct } = require('../models/products.models');

const createdProduct = async (name, quantity) => {
  const insert = await create(name, quantity);

  return insert || null;
};

const searchByName = async (name) => {
  const product = await getProduct(name);
  return product;
};

module.exports = {
  createdProduct,
  searchByName,
};
