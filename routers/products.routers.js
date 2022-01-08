const router = require('express').Router();

const { insertProduct } = require('../controllers/products.controllers');

const checkQuantity = require('../middlewares/checkQuantity');
const nameCheck = require('../middlewares/nameChack');

router.post(
  '/',
  nameCheck,
  checkQuantity,
  insertProduct,
  );

module.exports = router;
