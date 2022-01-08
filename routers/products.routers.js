const router = require('express').Router();

const { insertProduct, searchAll } = require('../controllers/products.controllers');
const { checkNameLength, checkNameAlreadyExists } = require('../middlewares/checkProductExistence');

const checkQuantity = require('../middlewares/checkQuantity');

router.get(
  '/',
  searchAll,
  );

router.post(
  '/',
  checkNameLength,
  checkNameAlreadyExists,
  checkQuantity,
  insertProduct,
  );

module.exports = router;
