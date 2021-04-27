var express = require('express');
var router = express.Router();
const model = require("./../models/pedido");

const pedidos=[
  {
    ID:"1",
    Fecha:"17/04/2021",
    Usuario:"Veronica Ramoz",
    FormaPago:"Efectivo",
    Estado:"Pendiente",
    Comentario:""
  },
  {
    ID:"2",
    Fecha:"17/04/2021",
    Usuario:"Natalia Baeza",
    FormaPago:"Efectivo",
    Estado:"Pendiente",
    Comentario:""
  },
  {
    ID:"3",
    Fecha:"17/04/2021",
    Usuario:"Diego Ramoz",
    FormaPago:"Efectivo",
    Estado:"Pendiente",
    Comentario:""
  }
]

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pedido', { productos: productos });
// });
router.get('/list', function(req, res, next) {
  res.render('orderList', { pedidos: pedidos });
});
router.get('/myorders', async (req, res) => {
  const misOrdenes = await model.getPedidosByUsuario(1);
  console.log(misOrdenes);
  res.render('myorders', { pedidos: misOrdenes });
});

router.get('/create', function(req, res, next) {
  res.render('order');
});
router.get('/view/:id', function(req, res, next) {
  res.render('orderView');
});

module.exports = router;
