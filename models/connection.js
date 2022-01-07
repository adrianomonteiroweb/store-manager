require('dotenv').config();
const mongodb = require('mongodb').MongoClient;

const DB_NAME = 'StoreManager';
const MONGODB_URL = `mongodb://${process.env.HOST}:27017/${DB_NAME}`;

module.exports = () => mongodb.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });