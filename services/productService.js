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

    return product; 
};

const updateProduct = async (id, name, quantity) => {
    const product = await productModel.getAllProductsById(id);

    if (!product.length) return undefined;

    await productModel.updateProduct(id, name, quantity);
    return { id, name, quantity };
};

const deleteProduct = async (id) => {
    const product = await productModel.getAllProductsById(id);

    if (!product.length) return undefined;

    await productModel.deleteProduct(id);
    return { id };
};

module.exports = { 
    getAllProducts,
     getAllProductsById,
      createNewProduct,
       updateProduct,
        deleteProduct,
    };
