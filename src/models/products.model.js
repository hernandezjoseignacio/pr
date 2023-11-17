import {Schema, model} from "mongoose";


const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true, //Quita los espacios vacios de los string ingresados como datos al ingresar un nuevo producto...
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    }
},
{
    timestamps: true,
    versionKey: false,
})

export default model("Products", productSchema);