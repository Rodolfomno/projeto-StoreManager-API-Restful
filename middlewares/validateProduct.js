const { schemaProducts } = require('../schema/schema');

const validateProducts = async (req, _res, next) => {
    try {
        const { body } = req;
        await schemaProducts.validateAsync(body);
        return next();
    } catch (error) {
        return next(error);
    }
};

module.exports = { validateProducts };