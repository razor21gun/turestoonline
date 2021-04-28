const {schemas} = require("./../schemas/Category");

const verifyCategory = (req,res,next) =>{
    console.log("Body Catgoria");
    console.log(req.body);
    const {error,value} = schemas.update.validate(req.body);
    if(error)
        res.status(422).json({error: error.details[0].message})
    else
        next()
}
module.exports = {verifyCategory};