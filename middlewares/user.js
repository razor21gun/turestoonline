const {schemas} = require("./../schemas/User");

const verifyLogin = (req,res,next) =>{
    const {error,value} = schemas.auth.validate(req.body);
    if(error)
        res.status(422).json({error: error.details[0].message})
    else
        next()
}
module.exports = {verifyLogin};