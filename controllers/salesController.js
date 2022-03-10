const salesService = require('../services/salesService');

const getAllSales = async (_req, res, next) => {
    try {
        const allSales = await salesService.getAllProducts();
        return res.status(200).json(allSales);
    } catch (error) {
        next(error);
    }
};

const getAllSalesById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const saleById = await salesService.getAllSalesById(id);
        if (!saleById[0]) return res.status(404).json({ message: 'Sale not found' });
        return res.status(200).json(saleById);
    } catch (error) {
        next(error);
    }
};

const newSale = async (req, res, next) => {
    try {
        const { body } = req;
        const createSale = await salesService.newSale(body);

        return res.status(201).json(createSale);
    } catch (error) {
        next(error);
    }  
};

module.exports = { getAllSales, getAllSalesById, newSale };
