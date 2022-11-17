const express=require("express");
const router=express.Router();

const {getProducts, newProduct, 
       getProductByid, 
       updateProduct, 
       deleteProduct, 
       getProductById, 
       createProductReview, 
       getProductReviews, 
       deleteReview,
       getAdminProducts
      } = require("../controllers/productsController"); //Trae respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//Probemos autenticación
router.route('/productos').get(getProducts);  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/:id').get(getProductById); //Ruta para consultar por id
router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

//Rutas admin
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);  //Ruta de actualizacion
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct); //Ruta de eliminacion
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct); //Ruta nuevo producto
router.route('/admin/productos').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts); //establecemos la ruta



module.exports=router;
