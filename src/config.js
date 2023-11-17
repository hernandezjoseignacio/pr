import dotenv from "dotenv";

dotenv.config();

export const settingDotEnv = ()=>{
    return {
        port: process.env.port,
        db: {
            localhost: process.env.DB_LOCALHOST,
        }
    }
}

export const settingSecretToken = ()=>{
    return {secret: process.env.secret};
}