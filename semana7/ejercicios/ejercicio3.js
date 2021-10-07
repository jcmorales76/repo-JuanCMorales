//Ingreso de datos
let cMateriaPrima = +prompt("Ingre el Costo de Materia Prima")
let clave = +prompt("Ingrese una clave de 1 al 6")


//Datos logicos
if(clave == 3 || clave == 4) {
    manoObra = cMateriaPrima*0.75
    mObra = `75%(${cMateriaPrima}Costo Materia Prima)`
} else if (clave == 1 || clave ==5){
    manoObra = cMateriaPrima*0.80
} else if (clave ==2 || clave ==6){
    manoObra = cMateriaPrima*0.85
} else {
    alert("Ingrese solo una de las 6 claves")
}

if (clave ==2 || clave==5){
    gastoFabricacion = cMateriaPrima*0.3
} else if (clave==3 || clave ==6){
    gastoFabricacion= cMateriaPrima*0.35
} else if (clave == 1 || clave==4 ){
    gastoFabricacion = cMateriaPrima*0.28
} else {
    alert("Ingrese solo una de las 6 claves")
}

//Calculo finales
// Costo Produccion = MPrima + MObra + GFabricacion
//pV   enta = cProduccion + 45%cProduccion

let cProduccion = cMateriaPrima + manoObra + gastoFabricacion
let pVenta = cProduccion + cProduccion*0.45 

alert(`Usted eligió la clave ${clave},
El costo de la materia prima es ${cMateriaPrima} Nuevos Soles,
Costo de Producción es igual a ${cProduccion.toFixed(2)} Nuevos Soles,
${mObra}
El Precio de Venta es igual a ${pVenta.toFixed(2)} Nuevos Soles`)