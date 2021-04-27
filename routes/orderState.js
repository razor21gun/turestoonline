var express = require('express');
const model = require("../models/categoria");

var router = express.Router();

const estadosPedidoList = [{
        ID:1,
        EstadoPedido:"Pendiente",
        Descripcion: "Pendiente de Procesar",
        Activo:true
    },
    {
      ID:2,
      EstadoPedido:"En Preparacion",
      Descripcion: "Nuestro Cheff lo esta Preparando",
      Activo:true
    },
    {
       ID:3,
       EstadoPedido:"Listo Para Retirar",
       Descripcion: "Puede pasar a Retirar",
       Activo:true
    },
]

const edit = (req, res) => {

    const  categoriaSeleccionada = categoriesList.find(item => item.ID == req.params.id);
    console.log(categoriaSeleccionada);
    res.render('estadoPedidoEdit',{ TituloForm:"Editar", Categoria: categoriaSeleccionada});
    //res.end();
  }

/* GET home page. */
router.get('/list', async (req, res, ) =>  {
  const estadosPedido = await model.get();
  res.render('estadoPedidoList', { estadosPedido: estadosPedidoList });
});

router.get('/edit/:id', edit);

router.get('/create', function(req, res, next) {
    res.render('estadoPedidoEdit');
});

router.get('/view/:id', async (req, res) => {
  const  estadoPedidoSeleccionado = estadosPedidoList.find(item => item.ID == req.params.id);
    res.render('estadoPedidoView', estadoPedidoSeleccionado);
  }
   
);

router.post('/new', function(req, res) {
    console.log(req.body);
    res.end();
  });

module.exports = router;