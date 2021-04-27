var express = require('express');
const model = require("./../models/usuario");
var router = express.Router();
const {send} = require('./../services/mail');
const sha1 = require("sha1");

/* GET users listing. */
const postCreate = async (req, res) =>{
    try {
        const user = req.body;
        const password = sha1(user.password);
        model.newUser(user);
        //const pass
        console.log(req.body.email)
        const objEmail = {
            mail : req.body.email,
            subject : "Bienvenido",
            text : "Gracias por registrarse!"
        }
        const mail = await send(objEmail);
        console.log(mail);
        res.end();
    } catch (error) {
        console.log(error);
    }
}

router.get('/', function(req, res, next) {
    res.render('registro');
});

router.post('/create', postCreate)

module.exports = router;