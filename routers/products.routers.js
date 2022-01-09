const router = require('express').Router();

const { insertProduct, searchAll } = require('../controllers/products.controllers');
const { checkNameLength, checkNameAlreadyExists } = require('../middlewares/checkProductExistence');
const { checkQuantityType, checkQuantityLength } = require('../middlewares/checkQuantity');

router.get(
  '/',
  searchAll,
  );

router.post(
  '/',
  checkNameLength,
  checkNameAlreadyExists,
  checkQuantityType,
  checkQuantityLength,
  insertProduct,
  );

module.exports = router;
