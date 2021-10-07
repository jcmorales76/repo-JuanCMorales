// crear una funcion que reciba un areglo y un nombre
//si el nombre existe dentro de la funcion retornar la posicion 
//del nombre encontrado, en aso de no encontrarlo retornar -1.

let nombres = ["juan","luis","alex","daniel","mario"];


function busquedaNombre(lista, nomb){
    for(let listaN=0; listaN<lista.length; listaN++){
        if(nomb == lista[listaN]){
            let mensaje = `el nombre ubicado se encuentra en: ${listaN}` ;
            return mensaje;
        }
    }

    return -1;
}

let nombre = prompt("Ingrese el nombre a buscar: ");
console.log(busquedaNombre(nombres, nombre));