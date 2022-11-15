const express= require("express");
const app= express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

//Uso constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Importar rutas
const productos = require("./routes/products")
const usuarios= require("./routes/auth")
const ordenes= require("./routes/orders")

//Dar permisos para usuar en el api las rutas
app.use('/api', productos) //Sujeto a verificacion (ruta del navagador)
app.use('/api', usuarios)
app.use('/api', ordenes)

//Middleware para manejo de errores
app.use(errorMiddleware)

module.exports=app