require('dotenv').config();
const { MongoClient } = require('mongodb');

const DB_NAME = 'StoreManager';
const MONGODB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;

module.exports = () => MongoClient.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
