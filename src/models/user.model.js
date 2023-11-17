import bcrypt from "bcrypt";
import {Schema, model} from "mongoose";

const userSchema = new Schema({
        username:{
            type: String,
            unique: true,
            required: true,
        },
        email:{
            type: String,
            unique: true,
        },
        password:{
            type: String,
        },
        roles: [{
            ref: "Role",
            type: Schema.Types.ObjectId,
        },],
    },
    {
    timestamps: true,
    versionKey: false,
});


//Metodos para cifrar y comparar las contraseñas
//Utilizamos un metodo estatico para evitar instanciar
userSchema.statics.encryptPassword = async(password)=>{
    const salt = bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
}

userSchema.statics.comparePassword = async(password, receivedPassword)=>{
    return await bcrypt.compare(password, receivedPassword);
}

export default model("User", userSchema);