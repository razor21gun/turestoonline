const Joi = require("@hapi/joi");
const schemas = {
    update: Joi.object().keys({
        Produco: Joi.string().max(50).required(),
        FK_ID_Categoria: Joi.number().required(),
        Precio: Joi.number().required(),
        Descripcion: Joi.number().required(),
    })
}
module.exports = {schemas}