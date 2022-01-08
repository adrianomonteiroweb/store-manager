const { create, getProduct, getAllProducts } = require('../models/products.models');

const createdProduct = async (name, quantity) => {
  const insert = await create(name, quantity);

  return insert || null;
};

const searchByName = async (name) => {
  const product = await getProduct(name);

  return product;
};

const getAll = async () => {
  const get = await getAllProducts();

  return get;
};

module.exports = {
  createdProduct,
  searchByName,
  getAll,
};
