const {schemas} = require("./../schemas/Product");

const verifyProduct = (req,res,next) =>{
    const {error,value} = schemas.update.validate(req.body);
    if(error)
        res.status(422).json({error: error.details[0].message})
    else
        next()
}
module.exports = {verifyProduct};