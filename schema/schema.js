const Joi = require('joi');

const schemaProducts = Joi.object({
    name: Joi.string().min(5).required(),
    quantity: Joi.number().min(1).required(),
  });

const sales = Joi.object({
    productId: Joi.number().min(1).required().messages({ 
      'any.required': '"productId" is required', 
    }),
    quantity: Joi.number().min(1).required().messages({
      'any.required': '"quantity" is required', 
      'number.min': '"quantity" must be greater than or equal to 1', 
      'number.base': '"quantity" must be greater than or equal to 1', 
    }),
  });

const schemaSales = Joi.array().items(sales);

module.exports = { schemaSales, schemaProducts };
