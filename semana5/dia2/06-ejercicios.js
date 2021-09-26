/*
Una Bodega quiere hacer un inventario de sus productos
actualmente vende 03 productos, gaseosas, leche, galletas

* Queremos saber por cada tipo de producto, cuantos tiene en existencia

*eso s, Sabes el total de productos, pero no su cantidad correspondiente a cada tipo
*/

/*
Descomposicion

*Manejamos 03 productos,
*Dice que sabemos el tortal de todo pero no por tipo
*Tendremos que preguntar producto por producto

a) Que datos necesito?
*total de gaseosas + leche + galletas
*contar por tipo de producto

b) de donde obtengo esos datos?
* se los pregunto al usuario con un Prompt

c) estan de la forma que necesito?
*Necesito contar 1 x 1, number
*/

let cantProductos = +prompt("Cuantos productos en total tienes");

let gaseosa =0;
let leche=0;
let galletas=0;

//patron, voy a preguntar una y otra vez
for(let i= 0; i < cantProductos; i++){
    let producto = +prompt("Ingrese 1. Gaseosa 2.Leche 3.Galletas");
    switch(producto){
        case 1:
            gaseosa = gaseosa + 1;
            break;
        case 2:
            leche++;
            break;
        case 3:
            galletas++;
            break;
        default:
            alert("Numero Erroneo")
            // i = i-1;
            i--;

    }
}

console.log(`En total hay:
                Gaseosa: ${gaseosa}
                Leche: ${leche}
                Galletas: ${galletas}`);