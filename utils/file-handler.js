const fs = require("fs");
const {v4: uuid} = require("uuid");
const allowExtension = ["png","jpg"];

const deleteTemp = (file) => fs.unlink(file, e => console.log(e));

const saveFile = ({mimetype,size,path}, extension, destinationFolder = './public/images') => {
    try {
        const [type, ext] = mimetype.split("/");
        if(!extension.includes(ext))
            throw new Error("Formato incorrecto");

            const uid = uuid();
            const fileNameOut = `${destinationFolder}/${uid}.${ext}`;

            fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
            deleteTemp(path);
            return `${uid}.${ext}`
            //return fileNameOut;

    } catch (error) {
        console.log(error);
        deleteTemp(path);
    }
}

const imgFile = (file) => saveFile(file, allowExtension);

module.exports = {imgFile};