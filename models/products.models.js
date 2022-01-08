const connect = require('./connection');

const create = async (name, quantity) => {
  try {
    const conn = await connect()
      .then((db) => db.collection('products').insertOne({ name, quantity }));

    return conn ? conn.ops.pop() : null;
  } catch (error) {
    return error.message;
  }
};

const getProductByName = async (name) => {
  try {
    const conn = await connect();
    const product = await conn.collection('products').find({ name }).toArray();
  
    return product || null;
  } catch (error) {
    return error.message;
  }
};

module.exports = ({
  create: (name, quantity) => create(name, quantity),
  getProductByName,
});
