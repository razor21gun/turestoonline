var express = require('express');
var router = express.Router();
const model = require("./../models/pedido");
const modelProduct = require("./../models/producto");
const modelCategory = require("./../models/categoria");
const linq = require('linqjs');

const getMenu = async (req, res) =>  {
  const productos = await modelProduct.getMenu();
  const categorias = await modelCategory.get();
  console.log("Productos")
  console.log(productos)
  console.log("Pizzas")
  console.log(productos.find(producto => producto["Categoria"] == "Pizzas"));

  let Menu = [];
  categorias.forEach(categoria => {
    let group = {
      Key: categoria["Categoria"],
      Values:null
    };
    let productosArr = [];
    productos.forEach(producto => {
      if(producto["Categoria"] == categoria["Categoria"])
        productosArr.push(producto);
    });
    group["Values"] = productosArr;

    Menu.push(group);
  });


  res.render('menu', {Menu});
};

const getCreate = async (req, res) => {
  
  res.render('order');
}

router.get('/list', function(req, res, next) {
  res.render('orderList');
});
router.get('/myorders', async (req, res) => {
  const misOrdenes = await model.getPedidosByUsuario(1);
  console.log(misOrdenes);
  res.render('myorders', { pedidos: misOrdenes });
});

router.get('/menu', getMenu);
router.get('/create', getCreate);

router.get('/view/:id', function(req, res, next) {
  res.render('orderView');
});


module.exports = router;
