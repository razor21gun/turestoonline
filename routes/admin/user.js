var express = require('express');
var router = express.Router();
const model = require("../../models/usuario");
const sha1 = require("sha1");

const getList = async (req, res) =>{
  const usuarios = await model.get();
  res.render('usersList',{users:usuarios});
}



const view = async (req, res) => {
  console.log("antes de ir a la base de datos");
  const usuario = await model.single(req.params.id);
  //const  userSelect = usuarios.find(item => item.ID == req.params.id);
  

  if(usuario != null && usuario.length > 0){
    res.render('userView',{user:usuario[0]});
  }else{
    res.render("PageNotFound");
  }
  
  //res.end();
}

const getEdit = async (req, res) => {

  const usuario = await model.single(req.params.id);
  if(usuario != null && usuario.length > 0){
    res.render('userEdit',{user:usuario[0]});
  }else{
    res.render("PageNotFound");
  }

}

const postUpdate = async (req, res) =>{
  try {
      const user = req.body;
      user["Activo"] = 1;
      console.log("PostUpdate")
      console.log(user)

      const resultDB = model.update(req.params.id,user);
      res.redirect("/users/list")
  } catch (error) {
      console.log(error);
  }
}


const getDelete = async (req,res) => {

  const id = req.params.id;
  const deleteUser = await model.deleteUser(id);
  res.redirect("/users/list");
}



/* GET users listing. */
router.get('/list', getList);
router.get('/view/:id', view);
router.get('/edit/:id', getEdit);
router.post('/update/:id', postUpdate);
router.get('/delete/:id', getDelete);



module.exports = router;
