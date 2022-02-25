const productService = require('../services/productService');

const getAllProducts = async (_req, res, next) => {
    try {
        const allProducts = await productService.getAllProducts();
        return res.status(200).json(allProducts);
    } catch (error) {
        next(error);
    }
};

const getAllProductsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productById = await productService.getAllProductsById(id);
        console.log(productById[0]);
        if (!productById[0]) return res.status(404).json({ message: 'Product not found' });
        return res.status(200).json(productById);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllProducts, getAllProductsById };
