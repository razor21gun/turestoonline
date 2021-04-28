var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let isAdmin = false;
  console.log(req.session)
  if(req.session.idUsuario){
    isAdmin= true;
    req.app.locals.isAdmin = true;
  }
  res.render('index');
});

module.exports = router;
