const { ObjectId } = require('mongodb');
const connect = require('./connection');

const create = async (itensSold) => {
  try {
    const db = await connect();
    const insert = await db
    .collection('sales')
    .insertOne(
      { itensSold },
      );

      const insertObject = {
        _id: insert.insertedId,
        itensSold: [itensSold],
      };
    
    return !itensSold.length
    ? insertObject
    : insert.ops[0];
  } catch (error) {
    return error.message;
  }
};

const getSales = async () => {
  try {
    const db = await connect();
    const sales = await db.collection('sales').find({}).toArray();
    // console.log(sales);
    return sales || null;
  } catch (err) {
    return err.message;
  }
};

const getById = async (id) => {
  try {
    const db = await connect();
    const sale = await db.collection('products').findOne({ _id: ObjectId(id) });
    // console.log(typeof sale);
    return sale || null;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  create,
  getSales,
  getById,
};
