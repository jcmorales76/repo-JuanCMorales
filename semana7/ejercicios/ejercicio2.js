//ejercicio RUC - Modulo 11
//https://es.wikipedia.org/wiki/C%C3%B3digo_de_control

function verificarRUC(ruc) {
  //verificador que el RUC tenga 11 digitos
  if (ruc.length == 11) {
    //es correcto
    //porque  eventualmente en este bloque de codigo retornare un true
    let factorChequeo = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    let total = 0;
    for (let i = 0; i < factorChequeo.length; i++) {
      //i=0
      let prod = ruc[i] * factorChequeo[i];
      //total = total+prod
      total += prod;
    }
    let modulo = total % 11;
    let verificador = 11 - modulo;

    alert(verificador);

    if (verificador == ruc[10]) {
      return true;
    }
  }
  return false;
}

//console.log(verificarRUC("1040436018"));

let pagoHora = 25;
let totalHoras =0;

//i <=6 dias trabajadas
for (let i = 0; i <=6;i++){
    let cantDiaria = +prompt("Cuantas horas fueron hoy");
    totalHoras+=cantDiaria;
}

console.log(`El trabajador tiene un ${totalHoras} horas trabajadas con un pago de ${totalHoras*pagoHora}`);

