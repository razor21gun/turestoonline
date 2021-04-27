var express = require('express');
var router = express.Router();

deliveryTypeList = [{
        ID:1,
        DeliveryType:"take away",
        Activo:true
    },
    {
        ID:2,
        DeliveryType:"a domicilio",
        Activo:true
    },
    {
        ID:3,
        DeliveryType:"rappi",
        Activo:true
    },
]

const create = (req, res) => {

    const  categoriaSeleccionada = categoriesList.find(item => item.ID == req.params.id);
    console.log(categoriaSeleccionada);
    res.render('categoryCreate');
    //res.end();
  }
  const view = (req, res) => {

    const  deliveryTypeSeleccionada = deliveryTypeList.find(item => item.ID == req.params.id);
    res.render('TiposDeEntregaView',{deliveryType:deliveryTypeSeleccionada});
    //res.end();
  }

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('TiposDeEntrega', { deliveryType: deliveryTypeList });
});

router.get('/create', function(req, res, next) {
    res.render('TipoDeEntregaEdit');
  });
  router.get('/edit/:id', function(req, res, next) {
    res.render('TipoDeEntregaEdit');
  });
  router.get('/view/:id', view);

router.post('/new', function(req, res) {
    console.log(req.body);
    res.end();
  });

module.exports = router;