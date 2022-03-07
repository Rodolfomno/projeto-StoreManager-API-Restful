const productModel = require('../models/productModel');

const getAllProducts = async () => {
    const modelResponse = await productModel.getAll();
    return modelResponse;
};

const getAllProductsById = async (id) => {
    const modelResponse = await productModel.getAllProductsById(id);
    return modelResponse;
};

const createNewProduct = async (name, quantity) => {
    const getName = await productModel.getName(name);

    if (getName.length) return undefined;

    const modelResponse = await productModel.createNewProduct(name, quantity);
    const product = { id: modelResponse.insertId, name, quantity };
    console.log(product, 'service');

    return product; 
};

module.exports = { getAllProducts, getAllProductsById, createNewProduct };
