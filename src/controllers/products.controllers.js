import Products from "../models/products.model.js";

//Logica necesaria para recibir peticiones del cliente y dar respuestas del servidor


//Buscar todos los prodcutos
export const getAllProducts = async (req, res)=>{
    const products = await Products.find();
    res.json(products);
}

//Buscar producto por Id
export const getProductById = async (req, res)=>{
    const {productId} = req.params;
    try{
        const product = await Products.findById(productId);
        res.status(200).json(product);
    }catch(error){
        return res.json({message: "Error al buscar el producto con ese Id"});
    }
}

//Crear un Producto
export const createProduct = async (req, res)=>{
    const {name, category, price} = req.body;
    try{
        const newProduct = new Products({
            name,
            category,
            price
        });
        const productSaved = await newProduct.save();
        res.status(201).json(productSaved);
    }catch(error){
        return res.status(400).json({message: "Error al crear el producto"});
    }
}

//Actualizar Producto
export const updateProduct = async (req, res)=>{
    const {productId} = req.params;
    const product = req.body;
    try{
        const updatedProduct = await Products.findByIdAndUpdate(productId, product, {new: true});
        res.status(200).json(updatedProduct);
    }catch{
        return res.status(400).json({message: "El producto no pudo ser actualizado"});
    }
}


//Eliminar Producto
export const deleteProduct = async (req, res)=>{
    const {productId} = req.params;
    try{
        await Products.findByIdAndDelete(productId);
        res.status(200).json({message: "El producto fue eliminado"});
    }catch{
        return res.status(400).json({message: "El producto no pudo ser eliminado"});
    }
}














