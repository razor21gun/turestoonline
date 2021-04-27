const {newCategory, createImg} = require("./../models/categoria");
const {imgFile} = require("./../utils/file-handler");

const createCatgoria = async(body,file) =>{
    console.log("createCategoria")
    console.log(body)
    try {
        const { insertId: FK_ID_Categoria} = await newCategory(body);
        console.log("Valor file")
        console.log(file);
        const UID = imgFile(file);
        console.log("Valor UID")
        console.log(UID);
        const obj = {FK_ID_Categoria,UID};
        const {insertId: idFile} = await createImg(obj);

        return idFile;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createCatgoria};