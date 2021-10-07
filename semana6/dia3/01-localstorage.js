let nombre = prompt("Ingresa tu nombre");

//.setItem("nombre de los que guardo","valor de lo guardado");
localStorage.setItem("nombreUsuario", nombre);

// setTimeout(function () {
//   //leer contenido del localStorage
//   //getItem("nombrealgoguarado en el LS")
//   let obtenido = localStorage.getItem("nombreUsuario");
//   alert(obtenido);
// }, 4000);

// setTimeout(function () {
//     //eliminar algo 
//     //removeItem("nombreUsuario");
//     localStorage.removeItem("nombreUsuario");
// },12000);

//ejecuta algo en un intervalo, de foma periodica.
// setInterval(function () {
//     console.log("Holaaaaaa");
// },1000);

let objeto ={
    modelo:"Iphone",
    pantalla:6.5,
    colores:["Blanco", "rojo", "azul"],
    anio:2021,

};

let objAJSON = JSON.stringify(objeto);

console.log(typeof objAJSON);

localStorage.setItem("objeto",objAJSON);

setTimeout(function(){
    let jsonObtenido = localStorage("objeto");

    let jsonRecuperado = JSON.parse(jsonObtenido);
    console.log(jsonRecuperado);
},4000);