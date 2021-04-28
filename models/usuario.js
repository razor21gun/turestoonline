const { response } = require("../app");
const pool = require("./../utils/bd");
const TABLA_USUARIO = "usuario";

const get = async () =>{
    const query = "SELECT ID_Usuario,Nombre,Apellido,Email,UserName,Activo FROM ?? WHERE Activo = true";
    const params = [TABLA_USUARIO];
    const rows = await pool.query(query,params);
    return rows;

}

const single = async (value) =>{
    
    const query = "SELECT * FROM ?? WHERE ID_Usuario = ?";
    const params = [TABLA_USUARIO,value];
    const rows = await pool.query(query,params);
    return rows;
}

const newUser = async (obj) =>{
    const query = "INSERT INTO ?? SET ?";
    const params = [TABLA_USUARIO,obj];
    const rows = await pool.query(query,params);
    return rows;
    //pool.query(query,params).then((response) => response).catch((e) => console.log(e))
}
const update = async (id,obj) =>{
    const query = "UPDATE ?? SET ? WHERE ID_Usuario = ?";
    const params = [TABLA_USUARIO,obj,id];
    const rows = await pool.query(query,params);
    return rows;
}

const deleteUser = async (id) =>{
    const query = "UPDATE ?? SET Activo = false WHERE ID_Usuario = ?";
    const params = [TABLA_USUARIO,id];
    const rows = await pool.query(query,params);
    return rows;
}

const auth = async ({UserName,Password}) => {
    const query = "SELECT ID_Usuario FROM ?? WHERE UserName = ? AND Password = ? AND Activo = true";
    const params = [TABLA_USUARIO,UserName,Password];
    const rows = await pool.query(query,params);
    return rows;
}

module.exports = {get,single,newUser,update,deleteUser,auth}