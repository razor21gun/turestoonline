var express = require('express');
const model = require("../../models/usuario");
var router = express.Router();
const {send} = require('../../services/mail');
const sha1 = require("sha1");

/* GET users listing. */
const postCreate = async (req, res) =>{
    try {
        const user = req.body;
        const password = sha1(user.Password);
        user["Password"] = password;
        user["Activo"] = 1;
        const resultDB = model.newUser(user);
        const objEmail = {
            mail : req.body.Email,
            subject : "Bienvenido",
            text : "Gracias por registrarse!"
        }
        const mail = await send(objEmail);
        
        res.redirect("/admin/users/list")
    } catch (error) {
        console.log(error);
    }
}

router.get('/', function(req, res, next) {
    res.render('registro');
});

router.post('/create', postCreate)

module.exports = router;