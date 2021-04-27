const { response } = require("../app");
const pool = require("./../utils/bd");
const TABLA_CATEGORIA = "Categoria";
const TABLA_CATEGORIA_IMAGEN = "categoria_imagen";
const get = async () =>{
    const query = "SELECT ID_Categoria,Categoria,Activo FROM ?? WHERE Activo = true";
    const params = [TABLA_CATEGORIA];
    const rows = await pool.query(query,params);
    return rows;

}

const single = async (id) =>{
    
    const query = "Select ID_Categoria,Categoria,Activo, categoria_imagen.UID FROM ?? INNER JOIN ?? ON categoria.ID_Categoria = categoria_imagen.FK_ID_categoria WHERE ID_Categoria = ?";
    const params = [TABLA_CATEGORIA,TABLA_CATEGORIA_IMAGEN,id];
    const rows = await pool.query(query,params);
    return rows;
}

const newCategory = async (obj) =>{
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_CATEGORIA,obj];
    const rows = await pool.query(query,params);
    return rows;
    //pool.query(query,params).then((response) => response).catch((e) => console.log(e))
}
const update = async (id,obj) =>{
    const query = "UPDATE ?? SET ? WHERE ID_Categoria = ?";
    const params = [TABLA_CATEGORIA,obj,id];
    const rows = await pool.query(query,params);
    return rows;
}
const deleteCategory = async (id) =>{
    const query = "UPDATE ?? SET Activo = false WHERE ID_Categoria = ?";
    const params = [TABLA_CATEGORIA,id];
    const rows = await pool.query(query,params);
    return rows;
}
const createImg = async (obj) =>{
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_CATEGORIA_IMAGEN,obj];
    const rows = await pool.query(query,params);
    return rows;
}

module.exports = {get,single,newCategory,update,deleteCategory,createImg}