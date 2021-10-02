//info del navegador
console.log(`Info Navegador: ${window.navigator.UserAgent}`);

//cual es mi url

console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function(ubicacion) {
    console.log(ubicacion);
});

console.log(window.document);

let miTitulo = document.querySelector('h1');


console.log(miTitulo);

miTitulo.innerHTML = "Hola soy un nuevo Titulo";

//el html den tro de la etiqueta
console.log(miTitulo.innerHTML);

//obtener un elemento , onjeto element

let miCaja = document.getElementById("caja");
console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>";

//background-Color = backgroundColor
miCaja.style.backgroundColor = "purple";
miCaja.style.color="white";

let misItems = document.getElementsByClassName("lista_item");

console.log(misItems);

let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotacion importante acerca de foreach, map, filter, find
//foreach(function(item, indice-item){})
arregloItems.forEach(function (item, indice, arreglo){
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
    //consolo.log("Mostrando el arreglo",arreglo);
});
//Obtener elemento de diferentes maneras
//los queryselector y queryselectorall function funcionande la mismo manera que los valores de Css
let miTexto = document.querySelector('#texto');
console.log(miTexto);

let boxes = document.querySelectorAll('.box');

console.log(boxes);

boxes.forEach(function(bx){
    bx.innerHTML=`<p>Soy un parrafo</p>`
});

console.log(boxes[0].innerHTML);

//crear lementos

let series =[
    'squid Game',
    'Pasion de Gavilanes',
    'Dark',
    'Got',
    'suits',
    'Mr. Robot',
]
let divContenido = document.getElementById("contenido");
//create elemento("Etiqueta") p, ul, h1, td
let lista = document.createElement("ul");
//agrefando ese elemento como hjijio
//push a un elemento existinte
divContenido.appendChild(lista);

let textoLI="";
series.forEach(function(programaTV){
    textoLI = textoLI + `<li>${programaTV}</li>`
});

//console.log(textoLI);

lista.innerHTML=textoLI;

let imagen = document.createElement("img");


//agregar como hijo a un elemento
divContenido.appendChild(imagen);

//SetAtribute('nombre_attr", valor)
imagen.setAttribute("src","https://picsum.photos/200/300")

//clases CSS
//a un elemento le podemos aplicar varias clases
//add("nombre de la clase") 
lista.classList.add("resaltado");
lista.classList.add("redondeado");
lista.classList.add("verdecito");
lista.classList.remove("resaltado")