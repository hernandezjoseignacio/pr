const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

//Esto es un comentario de prueba
var nombre = "José";
var apellido = "Hernández";
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);

const persona = { nombre: undefined, apellido: 'perez', edad: 30}; //Declaramos un objeto llamado persona con dos atributos con sus respectivos valores
const {nombre: nombreee = 'Pablo', edad} = persona; //Al recuperar nombre del objeto persona, le cambiamos el nombre a la variable por "nombreee" y le asignamos un valor por defecto ("Pablo")
console.log(nombreee);
console.log(edad);
