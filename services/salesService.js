const salesModel = require('../models/salesModel');

const getAllSales = async () => {
    const modelResponse = await salesModel.getAllSales();
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

const updateSale = async (id, body) => {
    const getSaleId = await salesModel.getAllSalesById(id);

    if (!getSaleId.length) return undefined;

// resolucao para resolver problema de async await em hofs, no await in loop no https://eslint.org/docs/rules/no-await-in-loop
    const results = [];
    for (let index = 0; index < body.length; index += 1) {
        const { productId, quantity } = body[index];
        const updatedSale = salesModel.updateSale(id, productId, quantity);
        results.push(updatedSale);
    }
    return Promise.all(results);
};

module.exports = { getAllSales, getAllSalesById, newSale, updateSale };