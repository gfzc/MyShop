const express=require("express");

//Se crea enrutador
const router=express.Router();

const {getProducts, newProduct, getProductByid, updateProduct, deleteProduct, getProductById, createProductReview, getProductReviews, deleteReview} = require("../controllers/productsController"); //Trae respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route('/productos').get(getProducts);  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin", "user"), newProduct); //Ruta nuevo producto
router.route('/producto/:id').get(getProductById); //Consulta por IS
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin", "user"), updateProduct);  //Ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin", "user"), deleteProduct); //Ruta de eliminacion

router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)


module.exports=router;
