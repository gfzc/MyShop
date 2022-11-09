const { request } = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto=require("../models/productos");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler=require("../utils/errorHandler")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require

//Ver toda la lista de los productos
exports.getProducts= catchAsyncErrors (async(req, res, next)=>{
    const resPerPage = 4;
    const productsCount = await producto.countDocuments();

    const apiFeatures = new APIFeatures(producto.find(), req.query)
        .search()
        .filter();
        
    let products = await apiFeatures.query;
    let filteredProductsCount= products.length;
    apiFeatures.pagination(resPerPage);
    products = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })



}) 

//Ver producto por id
exports.getProductById = catchAsyncErrors( async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    
    res.status(200).json({
        success:true,
        message:"Informacion del producto encontrado: ",
        product   
    })

})

//Update Producto
exports.updateProduct= catchAsyncErrors (async (req,res,next)=>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if(!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    //Si objeto existe se ejecuta actualizacion
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new: true, //Se validan solos los atributos nuevos o actualizados
        runValidators:true,
    });
    //Responde ok si se actulizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado con exito",
        product
    })
})

//Eliminar Producto
exports.deleteProduct= catchAsyncErrors (async (req,res,next)=>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if(!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await product.remove(); //Se elimina producto
    res.status(200).json({
        success:true,
        message:"Producto elimanado exitosamente",
    })
})

//Crear nuevo producto /api/productos
exports.newProduct= catchAsyncErrors( async(req,res,next)=>{
    req.body.user = req.user.id;
    
    const product= await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
})

//Crear o actualizar una review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comentario, idProducto } = req.body;

    const opinion = {
        nombreCliente: req.user.nombre,
        rating: Number(rating),
        comentario
    }

    const product = await producto.findById(idProducto);

    const isReviewed = product.opiniones.find(item =>
        item.nombreCliente === req.user.nombre)

    if (isReviewed) {
        product.opiniones.forEach(opinion => {
            if (opinion.nombreCliente === req.user.nombre) {
                opinion.comentario = comentario,
                    opinion.rating = rating
            }
        })
    } else {
        product.opiniones.push(opinion)
        product.numCalificaciones = product.opiniones.length
    }

    product.calificacion = product.opiniones.reduce((acc, opinion) =>
        opinion.rating + acc, 0) / product.opiniones.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "Hemos opinado correctamente"
    })

})

//Ver todas las review de un producto
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.id)

    res.status(200).json({
        success: true,
        opiniones: product.opiniones
    })
})

//Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.idProducto);

    const opi = product.opiniones.filter(opinion =>
        opinion._id.toString() !== req.query.idReview.toString());

    const numCalificaciones = opi.length;

    const calificacion = product.opi.reduce((acc, Opinion) =>
        Opinion.rating + acc, 0) / opi.length;

    await producto.findByIdAndUpdate(req.query.idProducto, {
        opi,
        calificacion,
        numCalificaciones
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        message: "review eliminada correctamente"
    })

})


//FETCH 

//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); //Se llama metodo creado para probar la consulta

//Ver productos por ID
function verProductID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductID('6347500b79190be39565ef49'); //Se llama metodo creado para probar la consulta con id
