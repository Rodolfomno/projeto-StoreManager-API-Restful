const salesModel = require('../models/salesModel');

const getAllProducts = async () => {
    const modelResponse = await salesModel.getAll();
    return modelResponse;
};

const getAllSalesById = async (id) => {
    const modelResponse = await salesModel.getAllSalesById(id);
    return modelResponse;
};

module.exports = { getAllProducts, getAllSalesById };