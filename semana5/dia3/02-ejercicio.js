/*
ejercicio

Tenemos 02 tipos de hamburguesas, una simple y una doble

cree un algoritmo que permita pedir x hamburguesas simples y
dobles y despues dar el total a pagar segun el pedido.

* La burguer simple cuesta 5 soles.
* La burguer doble cuesta 9 soles.
*/

/*
a) que datos Necesito?
    - cantidad de simples
    - cantidad de dobles
    - precio de simple 
    - precio de dobles
    variable que diga que ya finaliza el pedido
    (Pedido 1 x 1)

b) De donde obtengo esos datos?
    Precio en variables
    cantidad de dobles y simples
    si finaliza tambien preguntamos el usuario

c) Esos datos estan en la forma que neceisto?
    Cantidades esta tiene ser numerico
*/
let precioSimple =5;
let precioDoble =9;

let cantidadSimple=0;
let cantidadDoble=0;

//Finalizar indicara finalizar el pedido, no se quiere mas burgues o pedidos
let finalizar=false;

do {
  //codigo o ejecutar
    let eleccion = +prompt("Ingrese 1. Para simple, 2. Para Dobles y 3. Finalizar Pedido")

    switch(eleccion) {
        case 1:
            console.log("Una simple!!!!");
            cantidadSimple ++;
            break;
        case 2:
            console.log("Una Doble!!!!!")
            cantidadDoble ++;
            break;
        case 3:
            finalizar = true;
            break;
        default:
            console.log("Opcion Incorrecta")
    }
} while (finalizar == false);

let total = (precioSimple * cantidadSimple) + (precioDoble*cantidadDoble);

console.log(`El total a pagar sera ${total} por ${cantidadSimple} hamburguesas Simples y por ${cantidadDoble} hamburguesas Dobles`)