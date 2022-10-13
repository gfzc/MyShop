const express=require("express");

//Se crea enrutador
const router=express.Router();

const {getProducts, newProduct, getProductByid, updateProduct, deleteProduct} = require("../controllers/productsController") //Trae respuesta json desde el controlador

//enrutador.route("/productos").get(getProducts) //Establece desde que ruta se quiere ver el getProducts

router.route('/productos').get(getProducts);  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Ruta nuevo producto
router.route('/producto/:id').get(getProductByid); //Consulta por IS
router.route('/producto/:id').put(updateProduct);  //Ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct); //Ruta de eliminacion



module.exports=router;
