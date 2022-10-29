const { request } = require("express");
const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require

//Ver toda la lista de los productos
exports.getProducts= async(req, res, nest)=>{
    const productos= await producto.find();
    if(!productos){
        return res.status(404).json({
            success: false,
            error: true
        })
    }

    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos   
    })
}   

//Ver producto por id
exports.getProductByid = async (req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:"No encontramos el producto"
        })
    }
    res.status(200).json({
        success:true,
        message:"Informacion del producto encontrado: ",
        product   
    })

}

//Update Producto
exports.updateProduct= async (req,res,next)=>{
    let product= await producto.findById(req.params.id) //Variable de tipo modificable
    if(!product){ //Verifico que el producto no exista para finalizar proceso
        return res.status(404).json({
            success:false,
            message:"No encontramos el producto"
        })
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
}

//Eliminar Producto
exports.deleteProduct= async (req,res,next)=>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if(!product){ //Verifico que el producto no exista para finalizar proceso
        return res.status(404).json({ //Retur termina metodo si el objeto no existe
            success:false,
            message:"No encontramos el producto"
        })
    }
    await product.remove(); //Se elimina producto
    res.status(200).json({
        success:true,
        message:"Producto elimanado exitosamente",
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
