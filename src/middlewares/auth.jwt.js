import jwt from "jsonwebtoken";
import { settingSecretToken } from "../config.js";
import User from "../models/user.model.js";
import Role from "../models/Role.js";

export const verifyToken = async(req, res, next)=>{
    const token = req.headers["x-access-token"];
    try{
        if(!token){
            return res.status(403).json({message: "No se envio el token"});
        }else{
            const decoded = jwt.verify(token, settingSecretToken().secret );
            //console.log(decoded);

            req.userId = decoded.id;
            //const user = await User.findById(req.userId);
            //if(!user) return res.status(404).json({message: "No se encontro el usuario en ese Token"})
        }
        next();
    }catch(error){
        return res.status(403).json({message: "Error en el token..."});
    }
}

export const isAdmin = async(req, res, next)=>{
    const user = await User.findById(req.userId);
    try {
        const roles = await Role.find({_id: {$in: user.roles} });
        for(let i = 0;  i < roles.length; i++) {
            if(roles[i].name === "admin") {
                next();
                return;
            }
        }
        return res.status(404).json({message: "¡Se requieren permisos de Administrador para realizar esta tarea!"});
    } catch (error) {
        return res.status(405).json({message: "¡Error, no se pudo verificar que cuenta con los privilegios de Administrador!"});
    }
}
