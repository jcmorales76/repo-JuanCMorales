/*
for (contador; condicional; actualizacio_contador){
    codigo que se va a repetir
}

i++ es igual que i+ i + 1:
*/
/*
for (let i = 0; i <= 100; i++) {
  console.log(`contador es: ${i}`);
}

console.log("Yo estoy al final");

let ropa = ["bufanda", "Camisa", "Guantes", "Jeans"];

for (let i = 0; i < ropa.length; i++) {
    console.log(ropa[i]);
}*/

let carta=["Ceviche","Pollo a la brasa", "costillar", "adobo","caldo de gallina"];

let eleccion = +prompt("0. Ceviche, 1. Pollo a la brasa, 2. costillar, 3. adobo, 4. adobo")

for(let i = 0; i < carta.length; i++) {
    if(eleccion==i){
        console.log(`Usted a Elegido ${carta[i]}`)
    }
}