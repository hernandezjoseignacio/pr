//Servidor con modulo nativo de NODE
//Para arrancar el servidor basta con abrir una terminal e ingresar "node serverNode.js"
const http = require("node:http");

const servidor = http.createServer((req, res)=>{
    //Biembenida a la pagina de Inicio
    //Enrutamiento
    if(req.url === "/home"){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Bienvenidos a la pagina Principal");
    }else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Acerca de nosotros");
        }else if(req.url === "/contact"){
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Contactos al telefono 1234567890")
            }else{
                res.writeHead(400, {"Content-Type": "text/plain"});
                res.end("Pagina no encontrada");
            }
})

const port = 5000;

servidor.listen(port, ()=> console.log(`Servidor escuchando en el puerto ${port}`));