// const routes = require("express").Router();

// routes.get("/index", (req, res)=>{ res.send("¡Hola a todos, este es el inicio de mi sitio WEB!")});

// module.exports = routes;

//-----------------------------------------------------------------------------------------------------

import { Router } from "express";

const indexRoutes = Router();

indexRoutes.get("/index", (req, res)=>{ res.send("¡Hola a todos, este es el inicio de mi sitio WEB!")});

export default indexRoutes;