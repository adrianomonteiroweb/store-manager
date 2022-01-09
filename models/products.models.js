const { ObjectId } = require('mongodb'); // https://docs.mongodb.com/manual/reference/method/ObjectId/
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
    return products || null;
  } catch (err) {
    return err.message;
  }
};

const getProductById = async (id) => {
  try {
    const db = await connect();
    const product = await db.collection('products').findOne({ _id: ObjectId(id) });

    return product || null;
  } catch (err) {
    return err.message;
  }
};

const updateProductById = async (id, name, quantity) => {
  try {
    const db = await connect();
    await db
    .collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });

    return { id, name, quantity } || null;
  } catch (err) {
    return err.message;
  }
};

const deleteProductById = async (id) => {
  try {
    const db = await connect();
    const deleted = await db
    .collection('products')
    .findOneAndDelete({
      _id: ObjectId(id),
    }, {
      returnOriginal: 'after',
    });

    return deleted || null;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  create,
  getProductByName,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
