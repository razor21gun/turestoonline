const verifyAdmin = (req,res,next) =>{
    if(req.session.idUsuario){
        req.app.locals.isAdmin = true;
       next(); 
    }else{
        res.redirect("/login",{message:"Debe autenticarse para ingresar al sitio."})
    }
}

module.exports = {verifyAdmin};