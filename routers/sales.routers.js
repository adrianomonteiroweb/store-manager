const router = require('express').Router();

const { insertSales } = require('../controllers/sales.controllers');
const { checkQuantityType, checkQuantityLength } = require('../middlewares/checkQuantity-sales');

router.post(
  '/',
  checkQuantityType,
  checkQuantityLength,
  insertSales,
  );

module.exports = router;
