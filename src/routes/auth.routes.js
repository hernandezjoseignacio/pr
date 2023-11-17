import {Router} from "express";
import {signup, signin} from "../controllers/auth.controllers.js"
import { validarUsuario, manejarErroresValidacion } from "../middlewares/user.validation.js";

export const authRouter = Router();

//SIGNUP
authRouter.post("/signup", validarUsuario, manejarErroresValidacion, signup);
authRouter.post("/signin", signin); //validarUsuario, manejarErroresValidacion,