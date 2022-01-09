const router = require('express').Router();

const {
  insertProduct,
  searchAll,
  searchById,
  updateProduct,
} = require('../controllers/products.controllers');

const {
  checkNameLength,
  checkNameAlreadyExists,
  checkProductById,
} = require('../middlewares/checkProductExistence');

const { checkQuantityType, checkQuantityLength } = require('../middlewares/checkQuantity');

router.get(
  '/',
  searchAll,
  );

router.get(
  '/:id',
  checkProductById,
  searchById,
  );

router.post(
  '/',
  checkNameLength,
  checkNameAlreadyExists,
  checkQuantityType,
  checkQuantityLength,
  insertProduct,
  );

router.put(
  '/:id',
  checkNameLength,
  checkQuantityLength,
  checkQuantityType,
  updateProduct,
  );

module.exports = router;
