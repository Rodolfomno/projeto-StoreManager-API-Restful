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
        return res.status(200).json(productById[0]);
    } catch (error) {
        next(error);
    }
};

const createNewProduct = async (req, res, next) => {
    try {
        const { name, quantity } = req.body;
        const product = await productService.createNewProduct(name, quantity);
        if (!product) return res.status(409).json({ message: 'Product already exists' });

        return res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, quantity } = req.body;
        const updatedProduct = await productService.updateProduct(id, name, quantity);
        console.log(updatedProduct);

        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return next(error);
    }
};

module.exports = { getAllProducts, getAllProductsById, createNewProduct, updateProduct };
