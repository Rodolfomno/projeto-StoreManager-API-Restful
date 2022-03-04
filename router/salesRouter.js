const express = require('express');

const salesController = require('../controllers/salesController');
const { validateSales } = require('../middlewares/validateSale');

const salesRouter = express.Router();

salesRouter.get('/', validateSales, salesController.getAllSales);
salesRouter.get('/:id', validateSales, salesController.getAllSalesById);

module.exports = salesRouter;