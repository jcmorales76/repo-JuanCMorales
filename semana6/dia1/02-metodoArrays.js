//filter

let conductores = [
  {
    nombre: "Jose",
    vacunado: true,
  },
  {
    nombre: "Glenda",
    vacunado: true,
  },
  {
    nombre: "Osmar",
    vacunado: false,
  },
];

let puedePasar = conductores.filter(function (driver) {
    return driver.vacunado==true;
});

console.log(puedePasar);

let dniDB = ["40436018","07510728","77240408"];

let encontrado = dniDB.find(function(doc){
    return doc == "40436018";
});

console.log(encontrado);