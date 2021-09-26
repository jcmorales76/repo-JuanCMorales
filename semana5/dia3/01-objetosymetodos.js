let restaurante = {
  nombre: "La nueva Palomino",
  platillos: [
    {
      id: 1,
      nombrePlatillo: "Sencca",
      precio: 30,
    },
    {
      id: 2,
      nombrePlatillo: "Pepian de Cuy",
      precio: 36,
    },
    {
      id: 3,
      nombrePlatillo: "Americano",
      precio: 40,
    },
  ],

  mostrarPlatillos: function () {
    console.log(restaurante.platillos);
  },
};

// consolo.log(restaurante.platillos);
// restaurante.mostrarPlatillos();

let jugador = {
  nombre: "Dybala",
  nacionalidad: "Argentina",
  posicion: "volante, delantero",
  estatura: 1.85,
  correr: function () {
    //metodo
    console.log("Corre corre correeeeee");
  },
  cabecear: function () {
    //metodo
    console.log(" salta y cabecea la pelota");
  },
  patear: function () {
    //metodo
    console.log("pateaaaaaaaaa");
  },
};

jugador.correr();
