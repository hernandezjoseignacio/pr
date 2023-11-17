import {body, validationResult} from "express-validator";

export const validarUsuario = [
    body("username")
        .notEmpty().withMessage("¡El nombre de usuario es obligatorio!")
        .isLength({min: 6}).withMessage("¡El nombre de usuario debe contener al menos 6 caracteres!"),

    body("email")
        .isEmail().withMessage("!Ingrese un email valido¡")
        .notEmpty().withMessage("¡El mail no debe estar vacío!"),

    body("password")
        .notEmpty().withMessage("¡La contraseña es obligaotria!")
        .isLength({min: 6}).withMessage("¡La contraeña debe contener al menos 6 caracteres alfanumericos!")
];


export const manejarErroresValidacion = (req, res, next)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){ 
        return res.status(400).json(error);  
    }
    next();
}