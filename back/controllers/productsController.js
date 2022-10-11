exports.getProducts=(req, res, nest)=>{
    res.status(200).json({
        success:true,
        message: "En esta ruta se ven todos los productos"
    })

}