const { create } = require('../models/sales.models');

const createdSale = async (body) => {
  const insert = body.length < 2 
  ? await create(body[0])
  : await create(body);

  return insert || null;
};

module.exports = {
  createdSale,
};
