// const routes = require("express").Router();

// routes.get("/products", (req, res)=>{ res.send("¡Hola a todos, este es el sitio de productos!")});

// module.exports = routes;

//-----------------------------------------------------------------------------------------------------

import { Router } from "express";
import {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} from "../controllers/products.controllers.js";

const productsRoutes = Router();

//GET All
productsRoutes.get("/products", getAllProducts);

//GET By Id
productsRoutes.get("/products/:productId", getProductById);

//POST
productsRoutes.post("/products", createProduct);

//PUT
productsRoutes.put("/products/:productId", updateProduct);

//DELETE
productsRoutes.delete("/products/:productId", deleteProduct);

export default productsRoutes;