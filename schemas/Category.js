const Joi = require("@hapi/joi");
const schemas = {
    update: Joi.object().keys({
        Categoria: Joi.string().max(50).required(),
    })
}
module.exports = {schemas}