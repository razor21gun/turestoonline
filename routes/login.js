var express = require('express');
var router = express.Router();
const sha1 = require("sha1");
const model = require("./../models/usuario");
/* GET users listing. */
const {verifyLogin} = require("./../middlewares/user");


const postLogin = async (req,res) => {

    try {
      req.body.Password = sha1(req.body.Password);
      var obj = req.body;
      console.log("Imprimir Login")
      console.log(obj);
      var result = await model.auth(obj);
      if(result.length > 0 ){
        req.session.idUsuario = result[0]["ID_Usuario"];
        console.log(req.session);
        res.redirect("/");
      }else{
        res.render("login",{message:"Usuario o Password Incorrectos!"});
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    
    
      // const id = req.params.id;
      // const deleteUser = await model.deleteUser(id);
      // res.redirect("/users/list");
}
    
const getLogin = async (req,res) => {
    res.render('login');
}


router.get('/', getLogin);
router.post('/', verifyLogin ,postLogin);
module.exports = router;