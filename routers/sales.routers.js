const router = require('express').Router();

const {
  insertSales,
  getAll,
  getById,
  updateSale,
} = require('../controllers/sales.controllers');

const { checkQuantityType, checkQuantityLength } = require('../middlewares/checkQuantity-sales');
const checkSaleById = require('../middlewares/checkSaleNoExists');

router.post(
  '/',
  checkQuantityType,
  checkQuantityLength,
  insertSales,
  );

router.get(
  '/',
  getAll,
);

router.get(
  '/:id',
  checkSaleById,
  getById,
);

router.put(
  '/:id',
  checkQuantityLength,
  checkQuantityType,
  updateSale,
);

module.exports = router;
