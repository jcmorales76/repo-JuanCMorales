// let producto=+prompt("Ingrese el codigo del producto")

// switch(producto){
//     //case posible valor, este puede ser un num, Booleanos, string
//     case 1:
//         console.log("Chocolate");
//         //todo el codigo que quiera
//         break;
//     case 2:
//         console.log("Papitas");
//         break;
//     case 3:
//         console.log("Galletas");
//         break;
//     case 4:
//         alert(`Usted escogio un Pollo`)
//         // console.log("Pollo");
//         break;
//     default:
//         console.log("Codigo no encontrado");
// }

let horas = +prompt("Ingrese sus horas semanales");

//si el trabajar, trabaja mas de 35 horasm, tiene horas extras
//s el trabajador tien iugual o mas de 30 hasta menos de 35, cumplio con su jornada
//si tiene menos de 30 se le debe enviar un aviso

switch (true){
    case horas >35:
        console.log("Horas extras");
        break;
    case horas >= 30 && horas <= 35:
        console.log("cumplio su jornada");
        break;

}