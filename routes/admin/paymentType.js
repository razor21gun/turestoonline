var express = require('express');
var router = express.Router();

paymentTypeList = [{
        ID:1,
        PaymentType:"Efectivo",
        Activo:true
    },
    {
        ID:2,
        PaymentType:"Credito",
        Activo:true
    },
    {
        ID:3,
        PaymentType:"Debito",
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

    const  paymentTypeSeleccionada = paymentTypeList.find(item => item.ID == req.params.id);
    res.render('TipoDePagoView',{PaymentType:paymentTypeSeleccionada});
    //res.end();
  }

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('TipoDePagoList', { paymentType: paymentTypeList });
});

router.get('/create', function(req, res, next) {
    res.render('TipoDePagoEdit');
  });
  router.get('/edit/:id', function(req, res, next) {
    res.render('TipoDePagoEdit');
  });
  router.get('/view/:id', view);

router.post('/new', function(req, res) {
    console.log(req.body);
    res.end();
  });

module.exports = router;