const { create, getSales, getById } = require('../models/sales.models');

const createdSale = async (body) => {
  const insert = body.length < 2 
  ? await create(body[0])
  : await create(body);

  return insert || null;
};

const getAllSales = async () => {
  const sales = await getSales();
  // console.log(sales);
  return {
    sales,
  } || null;
};

const getSaleById = async (id) => {
  const get = await getById(id);

  return get || null;
};

module.exports = {
  createdSale,
  getAllSales,
  getSaleById,
};
