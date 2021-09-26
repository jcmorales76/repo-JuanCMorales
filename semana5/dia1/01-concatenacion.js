let a=1;
let b="4";

let c= a=b;
console.log(typeof c);

// let apellido = "Montensinos"

// console.log("jorge " + apellido);

let nombre = "Juan Carlos"
let apellido = "Morales"

let nombreCompletos = nombre +" " + apellido;

console.log(nombreCompletos);

// template string / template literal 
//backticks
//${aca adentro, podemos poner codigo con JS}

let edad=31;

let texto = `Hola soy ${nombre} ${apellido}
 y soy de Lima, tengo ${edad} anos`;

console.log(texto);

//PROMPT, capturar datos del usuario

let cantidadMascotas = prompt(`Hola ${nombre} , cuantas mascotas tienes?`)

console.log(`Mascotas : ${cantidadMascotas}`)// todo lo ingresado en un prompt es string


//let convertido = +cantidadMascotas;
//parseInt, parse = interpretar, convierte a un entero 
//int enteros
//float acepta decimales
// RECOMENDADO EL SIGNO +

let convertido = +cantidadMascotas;

console.log(typeof convertido)

let converido2= parseFloat(cantidadMascotas)

console.log(typeof converido2, converido2)