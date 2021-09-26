let arrJuegos = [
    {
        nombre: "The Witcher",
        precio:60
    },
    {
        nombre: "Doom",
        precio:50
    },
    {
        nombre: "Among Us",
        precio:30
    },
    {
        nombre: "Bloodborne",
        precio:90
    },
    {
        nombre: "God of War (2018)",
        precio:160
    }, 
    {
        nombre: "Civilization VI",
        precio:45
    }
]

/**
 * 
 * Preguntaremos al usuario cual es su presuesto, para ofrecerle
 * video juegos que este en a su alcance
 * y despues brindaremos un carrito de compras para que los usuarios puedan
 * comoprar
 * 
 */

/**
 * 1. preguntar su presupuesto
 * 2. comprar el presupuesto con los juegos que ofrecemos
 * 3. segun la comparacion tener una lista de juegos a ofrecer
 * 4. Agregar al carrito de compras, seleccionar items
 * 5. Cobrar
 */

let presupuesto = +prompt("Cuanto es su presupuesto");

function revisarPresupuesto(){
    let juegosComprables=[]//una lista de los juegos que el usuario puede comprar
    for (let i=0; i<arrJuegos.length; i++){
        if(presupuesto >= arrJuegos[i].precio){
            juegosComprables.push(arrJuegos[i])
        }
    }
    return juegosComprables;
}

//agregar el carrito tiene que trabajar con la lista de los juegos que el usuario
//puede comprar

function agregarACarrito (listaJuegos){
    let carrito =[]
    for(let j=0; j<listaJuegos.length; j++){
        //como necisito saber siu al comoprar un juego puedo compra el siguiente 
        //sin quedarme sin plata

        if(presupuesto < listaJuegos[j].precio){
            console.log("Lo siento no alcanza:( ")
            continue;
        }

        //confirm pregunta y obtiene un booleano
        let compra = confirm(`Deseas comprar? ${listaJuegos[j].nombre}`);
        console.log(compra);

        if(compra == true){
            carrito.push(listaJuegos[j]);
            //actualizando mi presup;uesto segun vaya comprando
            presupuesto = presupuesto - listaJuegos[j].precio;
        }
    }
    //despues del for carrito estara lleno
    return carrito;
}

let listaComprables = revisarPresupuesto();

console.table(listaComprables);
//Despues de saber que juegos debe comoprar erl usuario le
//pregunto cual o cuales compra

let miCarrito = agregarACarrito(listaComprables);

console.log("Has comprado: ")
console.table(miCarrito);
console.log(`Tu vuelto es ${presupuesto}`)

