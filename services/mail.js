const nodemailer = require("nodemailer");

const send = async(obj) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASSWORD
            }
        });

        const info = {
            to: obj.mail,
            subject: obj.subject,
            text:obj.text
        }

        const sendMail = await transporter.sendMail(info);
        return sendMail;
    } catch (error) {
        console.log(error);
    }


}
module.exports = {send};