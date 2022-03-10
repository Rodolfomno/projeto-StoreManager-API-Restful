const salesModel = require('../models/salesModel');

const getAllProducts = async () => {
    const modelResponse = await salesModel.getAll();
    return modelResponse;
};

const getAllSalesById = async (id) => {
    const modelResponse = await salesModel.getAllSalesById(id);
    return modelResponse;
};

const newSale = async (body) => {
    const sale = await salesModel.newSale();

    body.forEach(async (product) => {
        await salesModel.newSaleProduct(sale.insertId, product.productId, product.quantity);
    });

    const response = { id: sale.insertId, itemsSold: body };

    return response;
};

module.exports = { getAllProducts, getAllSalesById, newSale };