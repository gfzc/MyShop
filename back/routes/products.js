const express=require("express");

//Se crea enrutador
const enrutador=express.Router();

const{getProducts}=require("../controllers/productsController") //Trae respuesta json desde el controlador

enrutador.route("/productos").get(getProducts) //Establece desde que ruta se quiere ver el getProducts

module.exports=enrutador;
