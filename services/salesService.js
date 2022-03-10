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

const updateSale = async (id, body) => {
    const getSaleId = await salesModel.getAllSalesById(id);
//    const [product] = body;

    if (!getSaleId.length) return undefined;

//   await salesModel.updateSale(id, product.productId, product.quantity)

    body.forEach(async ({ productId, quantity }) => {
        await salesModel.updateSale(id, productId, quantity);
        return { id, productId, quantity };
    });
};

module.exports = { getAllProducts, getAllSalesById, newSale, updateSale };