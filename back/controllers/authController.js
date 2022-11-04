const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const { response } = require("express");
const crypto = require("crypto");
const tokenEnviado = require("../utils/jwtToken");

//Registro nuevo usuario /api/usuario/registro
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password}= req.body;

    const user= await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }
    })

    tokenEnviado(user, 201, res)
})


//Iniciar Sesion - Login
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const { email, password} =  req.body;

    //Revisar campos completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email y Contraseña", 400))
    }

    //Buscar al usuario en base de datos
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email o contraseña invalidos", 401))
    }

    //Comparar contraseñas, verificarla
    const contrasenaOK= await user.compararPass(password);
    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña invalida",401))
    }

    tokenEnviado(user, 200, res)
})