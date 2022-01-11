const {
  create,
  getSales,
  getById,
  setById,
} = require('../models/sales.models');

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

const setSaleById = async (id, sale) => {
  const set = await setById(id, sale);
  // console.log(sale);
  // console.log(set);
  const allSales = await getSales();
  // console.log(allSales);
  return set
  ? allSales
  : null;
};

module.exports = {
  createdSale,
  getAllSales,
  getSaleById,
  setSaleById,
};
