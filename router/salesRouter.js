const express = require('express');

const salesController = require('../controllers/salesController');
const { validateSales } = require('../middlewares/validateSale');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSales);

salesRouter.get('/:id', salesController.getAllSalesById);

salesRouter.post('/', validateSales, salesController.newSale);

salesRouter.put('/:id', validateSales, salesController.updateSale);

module.exports = salesRouter;