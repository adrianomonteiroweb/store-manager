const {
  create,
  getProduct,
  getAllProducts,
  getProductById,
} = require('../models/products.models');

const createdProduct = async (name, quantity) => {
  const insert = await create(name, quantity);
  // console.log(insert);
  return insert || null;
};

const searchByName = async (name) => {
  const product = await getProduct(name);

  return product || null;
};

const getAll = async () => {
  const get = await getAllProducts();
  // console.log(get);
  return { products: get } || null;
};

const getById = async (id) => {
  const get = await getProductById(id);

  return get || null;
};

module.exports = {
  createdProduct,
  searchByName,
  getAll,
  getById,
};
