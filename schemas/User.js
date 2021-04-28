const Joi = require("@hapi/joi");

const schemas = {
    auth: Joi.object().keys({
        UserName: Joi.string().required(),
        Password: Joi.string().required().min(8).max(12).required()
    })
}
module.exports = {schemas}