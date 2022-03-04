const express = require('express');

const productsController = require('../controllers/productsController');
const { validateProducts } = require('../middlewares/validateProduct');

const productsRouter = express.Router();

productsRouter.get('/', validateProducts, productsController.getAllProducts);

productsRouter.get('/:id', validateProducts, productsController.getAllProductsById);

module.exports = productsRouter;