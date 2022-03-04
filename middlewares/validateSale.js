const { schemaSales } = require('../schema/schema');

const validateSales = async (req, _res, next) => {
    try {
        const { body } = req;
        await schemaSales.validateAsync(body);
        return next();
    } catch (error) {
        return next(error);
    }
};

module.exports = { validateSales };