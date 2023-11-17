// const routes = require("express").Router();

// routes.get("/products", (req, res)=>{ res.send("¡Hola a todos, este es el sitio de productos!")});

// module.exports = routes;

//-----------------------------------------------------------------------------------------------------

import { Router } from "express";
import {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} from "../controllers/products.controllers.js";
import { verifyToken, isAdmin } from "../middlewares/auth.jwt.js";

const productsRoutes = Router();

//GET All
productsRoutes.get("/products", verifyToken, getAllProducts);

//GET By Id
productsRoutes.get("/products/:productId", verifyToken, getProductById);

//POST
productsRoutes.post("/products", [verifyToken, isAdmin], createProduct);

//PUT
productsRoutes.put("/products/:productId", verifyToken, updateProduct);

//DELETE
productsRoutes.delete("/products/:productId", [verifyToken, isAdmin], deleteProduct);

export default productsRoutes;