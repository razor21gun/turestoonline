const {createImg, newProduct} = require("./../models/producto");
const {imgFile} = require("./../utils/file-handler");

const createProduct = async(body,file) =>{
    console.log("createProduct")
    console.log(body)
    try {
        const { insertId: FK_ID_Producto} = await newProduct(body);
        console.log("Valor file")
        console.log(file);
        const UID = imgFile(file);
        console.log("Valor UID")
        console.log(UID);
        const obj = {FK_ID_Producto,UID};
        const {insertId: idFile} = await createImg(obj);

        return idFile;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createProduct};