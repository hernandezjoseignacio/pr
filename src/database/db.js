import mongoose from "mongoose";
import {settingDotEnv} from "../config.js";

const {db} = settingDotEnv();


mongoose
        .connect(db.localhost)
        .then(()=> console.log("Base de datos conectada..."))
        .catch((err)=>console.log("Error al conectarse a la base de datos...  "+err));