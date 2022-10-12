const express=require("express");

//Se crea enrutador
const router=express.Router();

const {getProducts, newProduct} = require("../controllers/productsController") //Trae respuesta json desde el controlador

//enrutador.route("/productos").get(getProducts) //Establece desde que ruta se quiere ver el getProducts

router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //establecemos la ruta

module.exports=router;
