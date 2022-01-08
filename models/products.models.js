const connect = require('./connection');

const create = async (name, quantity) => {
  try {
    const db = await connect();
    const newProduct = await db.collection('products').insertOne({ name, quantity });

    return newProduct ? newProduct.ops.pop() : null;
  } catch (error) {
    return error.message;
  }
};

const getProductByName = async (name) => {
  try {
    const db = await connect();
    const product = await db.collection('products').find({ name }).toArray();
  
    return product || null;
  } catch (error) {
    return error.message;
  }
};

const getAllProducts = async () => {
  try {
    const db = await connect();
    const products = await db.collection('products').find({}).toArray();
    // console.log(products);
    return products;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  create,
  getProductByName,
  getAllProducts,
};
