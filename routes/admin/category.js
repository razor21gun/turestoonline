var express = require('express');
const model = require("../../models/categoria");
const multer = require("multer");
const service = require("../../services/categoria");
const {verifyCategory} = require("./../../middlewares/category");
const config = {
  dest: "./public/tmp"
}
const upload = multer(config);
var router = express.Router();


const edit = async (req, res) => {

  const categorias = await model.single(req.params.id);
  if(categorias.length > 0){
    const categoriaSeleccionada = {
      Categoria: categorias[0].Categoria,
      Activo: (categorias[0].Activo == 1) ? true : false,
      ID:categorias[0].ID_Categoria
    }
    console.log(categoriaSeleccionada);
    res.render('categoryEdit',{ TituloForm:"Editar", Categoria: categoriaSeleccionada});
  }
    //res.end();
}

const getList = async (req,res) =>{
  const categorias = await model.get();
  res.render('categoriesList', { categories: categorias });
}

const getCreate = (req,res) => {
  res.render('categoryEdit');
}
const postCreate = async (req,res) => {
  const obj = req.body;
  obj["Activo"] = 1;
  const idFile = await service.createCatgoria(obj,req.file);
  res.redirect("/admin/category/list")
}
const postUpdate = async (req,res) => {
  const obj = req.body;
  const id = req.params.id;
  console.log("Objeto");
  console.log(obj);
  const updateCategory = await model.update(id,obj);
  res.redirect("/admin/category/list")
}

const getView = async (req,res) => {
  const categorias = await model.single(req.params.id);
  if(categorias.length > 0){
    const categoriaSeleccionada = {
      Categoria: categorias[0].Categoria,
      Activo: (categorias[0].Activo == 1) ? "Si" : "No",
      ID:categorias[0].ID_Categoria,
      UID:categorias[0].UID
    }
    res.render('categoryView', categoriaSeleccionada);
  }
}

const getDelete = async (req,res) => {
  const obj = req.body;
  const id = req.params.id;
  console.log("Objeto");
  console.log(obj);
  const updateCategory = await model.deleteCategory(id);
  res.redirect("/category/list");
}

router.get('/edit/:id', edit);
router.get('/list', getList);
router.get('/create',getCreate);
router.post('/create',upload.single("imagen"),verifyCategory,postCreate);
router.post('/update/:id',upload.single("imagen"),verifyCategory,postUpdate);
router.get('/view/:id', getView);
router.get('/delete/:id', getDelete);

module.exports = router;