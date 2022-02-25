const productModel = require('../models/productModel');

const getAllProducts = async () => {
    const modelResponse = await productModel.getAll();
    return modelResponse;
};

const getAllProductsById = async (id) => {
    const modelResponse = await productModel.getAllProductsById(id);
    return modelResponse;
};

module.exports = { getAllProducts, getAllProductsById };