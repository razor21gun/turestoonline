var express = require('express');
var router = express.Router();

const usuarios = [
    {
      ID:"1",
      Nombre:"Natalia",
      Apellido:"Baeza",
      Email:"natina@hotmail.com",
      Ciudad:"CABA",
      Domicilio:"Cale falsa 123",
      Telefono:"111-11111",
      Activo:true
    },
    {
      ID:"2",
      Nombre:"Veronica",
      Apellido:"Ramoz",
      Email:"verora@hotmail.com",
      Ciudad:"CABA",
      Domicilio:"Cale falsa 123",
      Telefono:"111-11111",
      Activo:true
    },
    {
      ID:"3",
      Nombre:"Diego",
      Apellido:"Ramoz",
      Email:"theprincess@hotmail.com",
      Ciudad:"CABA",
      Domicilio:"Cale falsa 123",
      Telefono:"111-11111",
      Activo:true
    },
];


const view = (req, res) => {

  const  userSelect = usuarios.find(item => item.ID == req.params.id);
  console.log(userSelect);
  res.render('userView',{user:userSelect});
  //res.end();
}

const edit = (req, res) => {

  const  userSelect = usuarios.find(item => item.ID == req.params.id);
  console.log(userSelect);
  res.render('userEdit',{user:userSelect});
  //res.end();
}

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('usersList',{users:usuarios});
});

router.get('/view/:id', view);
router.get('/edit/:id', edit);

module.exports = router;
