const express = require('express');

const productsController = require('../controllers/productsController');
const { validateProducts } = require('../middlewares/validateProduct');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

productsRouter.get('/:id', productsController.getAllProductsById);

productsRouter.post('/', validateProducts, productsController.createNewProduct);

productsRouter.put('/:id', validateProducts, productsController.updateProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;