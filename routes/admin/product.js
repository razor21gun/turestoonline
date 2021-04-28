var express = require('express');
var router = express.Router();
const model = require("../../models/producto");
const modelCatgory = require("../../models/categoria");
const multer = require("multer");
const service = require("../../services/producto");
const {verifyProduct} = require("./../../middlewares/product");
const config = {
  dest: "./public/tmp"
}
const upload = multer(config);


const single = (req, res) => {
  console.log(req.params.id);
  res.end();
}


/* GET users listing. */
const getList = async (req, res) =>  {
  const productos = await model.get();
  res.render('productList', {productos});
};


const getCreate = async (req, res) => {
  const categoriasDB = await modelCatgory.get();
  const categorias = [];
    categoriasDB.forEach(element => {  
        const obj = {
          ID_Categoria:element["ID_Categoria"],
          Categoria:element["Categoria"]
        }
          categorias.push(obj);
    });

  res.render('productoEdit',{categorias, title:"Nuevo"});
};
const postCreate = async (req, res) => {
  const obj = req.body;
  obj["Activo"] = 1;
  const idFile = await service.createProduct(obj,req.file);
  res.redirect("/admin/product/list")
};

router.get('/new', function(req, res, next) {
  res.render('productoEdit');
});

const view = async (req, res) => {
  const productos = await model.single(req.params.id);
  if(productos.length > 0){
    const producto = {
      Categoria: productos[0].FK_ID_Categoria,
      ID:productos[0].ID_Producto,
      Producto:productos[0].Producto,
      Precio:productos[0].Precio,
      UID:productos[0].UID,
      Descripcion:productos[0].Descripcion,
    }
    res.render('productoView', producto);
  }
};
const getUpdate = async (req, res) => {
  const productos = await model.single(req.params.id);
  const categoriasDB = await modelCatgory.get();
  console.log("categorias");
  console.log(categoriasDB);
  if(productos.length > 0){
    const producto = {
      Categoria: productos[0].FK_ID_Categoria,
      ID:productos[0].ID_Producto,
      Producto:productos[0].Producto,
      Precio:productos[0].Precio,
      UID:productos[0].UID,
      Descripcion:productos[0].Descripcion,
    }
    const categorias = [];
    categoriasDB.forEach(element => {  
        const obj = {
          ID_Categoria:element["ID_Categoria"],
          Categoria:element["Categoria"]
        }
        if(element["ID_Categoria"] == producto["Categoria"])
          obj["Selected"] = true;
        
          categorias.push(obj);
    });
    console.log("categorias VIEW");
    console.log(categorias)
    res.render('productoEdit', {producto, categorias, title:"Editar"});
  }
}
const postUpdate= async (req, res) => {
  const obj = req.body;
  const id = req.params.id;
  //obj["Activo"] = (obj["Activo"] == "on") ? 1 : 0;
  console.log("Objeto");
  console.log(obj);
  const updateProduct = await model.update(id,obj);
  res.redirect("/admin/product/list")
}
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const updateProduct = await model.deleteProduct(id);
  res.redirect("/admin/product/list");
}

router.get('/update/:id', getUpdate);
router.post('/update/:id',verifyProduct, postUpdate);
router.get('/create', getCreate);
router.post('/create',upload.single("imagen"), verifyProduct, postCreate);
router.get('/view/:id', view);
router.get('/delete/:id', deleteProduct);
router.get('/list', getList);

module.exports = router;
