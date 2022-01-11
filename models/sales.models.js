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
    const sale = await db.collection('sales').findOne({ _id: ObjectId(id) });

    return sale || null;
  } catch (err) {
    return err.message;
  }
};

const setById = async (id, sale) => {
  try {
    const db = await connect();
    const set = await db.collection('sales')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { itensSold: sale } },
      );
    // console.log(set);
    return set || null;
  } catch (err) {
    return err.message;
  }
};

const deleteById = async (id) => {
  try {
    const db = await connect();

    // const set = await getById(id);

    const set = await db.collection('sales')
    .deleteOne(
      { _id: ObjectId(id) },
      );

    return set || null;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  create,
  getSales,
  getById,
  setById,
  deleteById,
};
