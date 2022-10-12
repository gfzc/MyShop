const producto=require("../models/productos")

exports.getProducts=(req, res, nest)=>{
    res.status(200).json({
        success:true,
        message: "En esta ruta se ven todos los productos"
    })

}

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

