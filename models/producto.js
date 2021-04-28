const { response } = require("../app");
const pool = require("./../utils/bd");
const TABLA_PRODUCTO = "producto";
const TABLA_PRODUCTO_IMAGEN = "producto_imagen";
const TABLA_CATEGORIA = "categoria";

const get = async () =>{
    const query = "Select ID_Producto,Producto,Precio,Descripcion,FK_ID_Categoria FROM ?? INNER JOIN ?? ON producto.ID_Producto = producto_imagen.FK_ID_Producto WHERE producto.Activo = true";
    const params = [TABLA_PRODUCTO,TABLA_PRODUCTO_IMAGEN];
    const rows = await pool.query(query,params);
    return rows;

}

const single = async (id) =>{
    
    const query = "Select ID_Producto,Producto,Precio,Descripcion,FK_ID_Categoria,producto_imagen.UID FROM ?? INNER JOIN ?? ON producto.ID_Producto = producto_imagen.FK_ID_Producto WHERE ID_Producto = ?";
    const params = [TABLA_PRODUCTO,TABLA_PRODUCTO_IMAGEN,id];
    const rows = await pool.query(query,params);
    return rows;
}

const newProduct = async (obj) =>{
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_PRODUCTO,obj];
    const rows = await pool.query(query,params);
    return rows;
    //pool.query(query,params).then((response) => response).catch((e) => console.log(e))
}
const update = async (id,obj) =>{
    const query = "UPDATE ?? SET ? WHERE ID_Producto = ?";
    const params = [TABLA_PRODUCTO,obj,id];
    const rows = await pool.query(query,params);
    return rows;
}
const deleteProduct = async (id) =>{
    const query = "UPDATE ?? SET Activo = false WHERE ID_Producto = ?";
    const params = [TABLA_PRODUCTO,id];
    const rows = await pool.query(query,params);
    return rows;
}
const createImg = async (obj) =>{
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_PRODUCTO_IMAGEN,obj];
    const rows = await pool.query(query,params);
    return rows;
}
const getMenu = async() =>{
    const query = "SELECT `ID_Producto`, `Producto`, `Precio`, `Descripcion`, producto_imagen.UID, producto.FK_ID_Categoria , categoria.Categoria FROM ?? INNER JOIN ?? ON producto.ID_Producto = producto_imagen.FK_ID_Producto INNER JOIN ?? ON categoria.ID_Categoria = producto.FK_ID_Categoria WHERE producto.Activo = 1";
    const params = [TABLA_PRODUCTO,TABLA_PRODUCTO_IMAGEN,TABLA_CATEGORIA];
    const rows = await pool.query(query,params);
    return rows;
}

//GETMENU


module.exports = {get,single,newProduct,update,deleteProduct,createImg,getMenu}