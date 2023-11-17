// //Servidor de Node con Express...
// //Para instalarlo tenemos que abrir una terminal e ingresar "npm init -y" y luego "npm i express"...
// //Luego en el archivo package.json, el main debe decir el nombre del achivo js que inicia el servidor 
// //y contiene el enrutamiento; y en script podemos colocar un "start": "node app.js" para iniciar 
// //el servidor con solo colocar en la terminal "node app.js"...
// const express = require("express"); //
// const indexRoutes = require("./src/routes/index.routes");
// const userRoutes = require("./src/routes/users.routes");
// const productsRoutes = require("./src/routes/products.routes");


// const app = express(); //

// app.use(indexRoutes)
// app.use(userRoutes); //
// app.use(productsRoutes); //

// const port = 4000;
// app.listen(port, ()=>{ console.log(`Servidor Express corriendo en el puerto ${port}`)});

import express from "express";
import indexRoutes from "./src/routes/index.routes.js";
//import {userRoutes} from "./src/routes/users.routes.js";
import productsRoutes from "./src/routes/products.routes.js";
import "./src/database/db.js";
import {settingDotEnv} from "./src/config.js";
import { authRouter } from "./src/routes/auth.routes.js";
import {createRoles} from "./src/initial.setup.js"


const app = express(); //
createRoles();

app.use(express.json());

app.use(indexRoutes);
app.use(authRouter);
//app.use(userRoutes); 
app.use(productsRoutes); //



const {port} = settingDotEnv();
app.listen(port, ()=>{ console.log(`Servidor Express corriendo en el puerto ${port}`)});

























