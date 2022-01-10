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
      console.log();
    return !itensSold.length
    ? insertObject
    : insert.ops[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
};
