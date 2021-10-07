let divContenido = document.getElementById("contenido");
let miBoton = document.createElement("button");
miBoton.innerText = "Clickeame!";
divContenido.appendChild(miBoton);
//elementoHTML,addEventListener("evento",function(){})
miBoton.addEventListener("click", function () {
  alert("Haz hecho click!");
});
let peliculas = [
  "Parasite",
  "Shang Chi",
  "Interstellar",
  "Matrix",
  "El bueno, el malo y el feo",
  "Geo tormenta",
  "Jhon Wick",
  "Constantine",
  "Godfather",
  "El Señor de los anillos",
];
peliculas.forEach(function (peli) {
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerHTML = peli;
  divContenido.appendChild(nuevoParrafo);
  nuevoParrafo.style.cursor = "pointer";
  nuevoParrafo.addEventListener("dblclick", function () {
    alert(`Hiciste click en ${peli}`);
    nuevoParrafo.style.backgroundColor = "steelblue";
  });
});
//

let miInput = document.createElement("input");
miInput.setAttribute("type", "password");
divContenido.appendChild(miInput);

let btnVer = document.createElement("button");
btnVer.innerText = "ver";
divContenido.appendChild(btnVer);

let esVisible = false; //flag

btnVer.addEventListener("click", function () {
  //esVisible = !esVisible;
  if (esVisible == false) {
    miInput.setAttribute("type", "text");
  } else {
    miInput.setAttribute("type", "password");
  }

  // btnVer.addEventListener("click", function(){
  //     if(esVisible == false) {
  //         miInput.setAttribute("type", "text")
  //         esVisible = true
  //     } else{
  //         miInput.setAttribute("type", "password")
  //         esVisible = false
  //     }

  // })

  //o

  function Mostrar() {
    esVisible = !esVisible;
    if (esVisible) {
      miInput.setAttribute("type", "password");
    } else {
      miInput.setAttribute("type", "text");
    }
  }
});

//capturar eventos

let irAGoogle = document.createElement("a");

irAGoogle.setAttribute("href", "https://www.google.com");

irAGoogle.innerText = "Llevame a Google";
divContenido.appendChild(irAGoogle);

//-----
//previene la accion por defecto de un evento, preventDefault()
irAGoogle.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log(evento);
});

//capturar primero el formulario de la
let miFormulario = document.getElementById('formulario');

//submit, es la accion de enviar datos para

miFormulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    console.log("Submiit!!!");
    //vamos a hacer envio de datos con JS
    //Todo loq ue obtengan de un input lo suele devilver como string
    let nuevoUsuario ={
        // he obtenido los datos de los input
        // formularios.nombre_input.value
        nombres:miFormulario.nombres.value,
        Apellidos: miFormulario.Apellidos.value,
    };
    console.log(nuevoUsuario);
 });
