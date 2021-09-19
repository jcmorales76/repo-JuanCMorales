//console.log permite mostrar en la consola de JS, lo que se nos antoje es muy util para saber que esta 
//pasando internamente dentro de JS

console.log("Hola Mundo");

//variables
//Palabras reservadas, JS las usa
//Los nombres de variables son sensibles a Mayus y Minus

var nombres ="Juan Carlos";
console.log(nombres); //Solamente para mostrar algo

// Tipos de gatos - Texto, Numeros, Booleanos

//String - Texto - Cadena de Texto
var nombre2 ='Juan';

//nimber - numero
var edad=45;
console.log(edad); //

//Boolean - Boleanos

var esDeNoche= true;
console.log(esDeNoche);

console.log(typeof esDeNoche)

// para cambiar de valor a una variable me basta con llamarlo

edad=44
console.log(edad); //

nombre = "Eduardo"
console.log(nombre); //

//cambiar tipo de cambio
var anio=2021

anio="dos mil veintidos"

console.log(anio);

//JS es un lenguaje que no es tipado, no pre declaramos los tipos de datos

//VALORES DE TIPOS RAROS EN variables

var nota;

console.log(nota);

var nulo=null; //Deberia haber algo, pero no esta

console.log(nulo);

//Not a number = NaN

var rareza=(100/'cevollas');
console.log(rareza);

var infinito = 100/0;
console.log(infinito);

console.log(typeof infinito);


