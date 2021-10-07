let productos = [
	{
		nombre:"Audifonos",
		clave:1,
		materiaPrima:20
	},
	{
		nombre:"Funda para movil",
		clave:2,
		materiaPrima:10
	},
	{
		nombre:"USB",
		clave:3,
		materiaPrima:15
	},
	{
		nombre:"Mouse Gamer",
		clave:6,
		materiaPrima:30
	},
	{
		nombre:"Teclado",
		clave:4,
		materiaPrima:120
	},
	{
		nombre:"Gráfica",
		clave:5,
		materiaPrima:200
	}
];

function calcularManoDeObra(clave, costoMP){
    if(clave == 3 || clave == 4){
        return costoMP *0.75;
    }else if(clave == 1 || clave == 5){
    return costoMP* 0.8;
    }else if(clave == 2 || clave == 6){
        return costoMP* 0.85;
    }
}

function calcularCostoFabricacion(clave, costoMP){
    if(clave == 2 || clave == 5){
        return costoMP *0.3;
    }else if(clave == 3 || clave == 6){
        return costoMP *0.35;
    }else if(clave == 1 || clave == 4){
        return costoMP *0.28;

    }
}

function calcularCostos(arrProductos){
    for (let i=0; i < arrProductos.length; i++) {
        //enfoquemosno en al mano de obra
        let costoMP = arrProductos[i].materiaPrima;
        console.log("MP", costoMP);
        let clave = arrProductos[i].clave;
        let costoMO= calcularManoDeObra(clave,costoMP);
        let costoCF = calcularCostoFabricacion(clave, costoMP);

        let cProduccion = costoMP + costoMO+costoCF
        console.log(`El costo total de ${arrProductos[i].nombre} es S/ ${cProduccion}`);
    }
}

calcularCostos(productos);