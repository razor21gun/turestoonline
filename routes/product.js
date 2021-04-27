var express = require('express');
const { param } = require('./category');
var router = express.Router();


const productList = [{
  ID:1,
  Categoria:"Milanesas",
  Nombre:"Milanesa Napolitana",
  Precio:"500",
  Descripcion:"Milanesa al horno con jamon, queso y tomate",
  Imagen:"",
  Activo:true
},
{
  ID:2,
  Categoria:"Empanadas",
  Nombre:"Empanadas Calabresa",
  Precio:"64",
  Descripcion:"Empanadas de Muzzarella y Cantimpalo",
  Imagen:"",
  Activo:true
},
{
  ID:3,
  Categoria:"Pizzas",
  Nombre:"Pizza Muzzarella",
  Precio:"900",
  Descripcion:"Pizza de muzzarella",
  Imagen:"",
  Activo:true
},
]


const single = (req, res) => {
  console.log(req.params.id);
  res.end();
}


/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('productList', {productos:productList});
});

router.get('/create', function(req, res, next) {
  res.render('productoEdit');
});

router.get('/new', function(req, res, next) {
  res.render('productList');
});

router.get('/view/:id', function(req, res, next) {
  const productoSeleccionado = productList.find(item => item.ID == req.params.id);
  console.log("Mostrar producto")
  console.log(productoSeleccionado);
  res.render('productoView', {producto:productoSeleccionado});
});

router.get('/edit/:id', function(req, res, next) {
  const productoSeleccionado = productList.find(item => item.ID == req.params.id);
  console.log("Mostrar producto")
  console.log(productoSeleccionado);
  res.render('productoEdit', {producto:productoSeleccionado});
});



router.get('/single/:id', single);

module.exports = router;
