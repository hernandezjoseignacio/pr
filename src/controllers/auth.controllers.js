import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { settingSecretToken } from "../config.js";
import Role from "../models/Role.js";



//Metodos de SIGNUP(Registrarse) y SIGNIN(Loguearse)

export const signup = async(req, res)=>{
    const {username, email, password, roles} = req.body;
    const newUser = new User({
        username, 
        email, 
        password: await User.encryptPassword(password),
    });
    //Logica para los roles
    if(roles){
        //Comparo el rol que tiene asignado el usuario que esta siendo creado con los roles guardados en la base de datos (si no hay coincidencia foundRoles queda vacío)
        const foundRoles = await Role.find({name: {$in: roles}});
        //Al encontrar coincidencia con el rol asignado y uno de los reoles guardados en la base de datos le asigna el id de dicho rol
        newUser.roles = foundRoles.map(role => role._id);
    }else{
        const role = await Role.findOne({ name: "user"});
        newUser.roles = [role._id];
    }
    const userSignup = await newUser.save();
    //res.status(200).json(userSignup);
    //Ver los Token
    const token = jwt.sign({id: userSignup._id}, settingSecretToken().secret, {expiresIn: "1h"});
    res.status(200).json({Message: "Usuario registrado con éxito", token});
}







