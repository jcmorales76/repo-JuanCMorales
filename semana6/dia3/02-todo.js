/**
 * 
 * Que datos necesito????
 * -La tarea(string), estado la tarea(bool)
 * - referencia del formulario
 * - referencia de la lista
 * 
 * 2. como obtengo los datos 
 * - evento click, tomando el value del input
 * 
 * 
 * 
 */

let miForm = document.getElementById("formToDo");

let ulTareas = document.getElementById("tareas");

let tareas = []; // aqui almacena las tareas a mostrar vamos a obtener el valor del input y afregarlo a tareas []

miForm.addEventListener("submit", function(e) {
    //evento
    e.preventDefault();
    //formulario.nombre.value
    let nuevaTarea = miForm.tarea.value;
    // console.log(nuevaTarea);
    tareas.push(nuevaTarea);
    console.log(tareas);
    //.reset() reincia todo el formulario
    miForm.reset();
    dibujarTareas();
});

function dibujarTareas(nuevaTarea) {
    //cada vez qu se ejecurte dibujartareas lo primero
    //que hago es decir contenido "" vacio

    ulTareas.innerHTML="";
    //se va encargar de dibujar las ulTareas
    tareas.forEach(function(item, posicion){
        let li = document.createElement("li")
        li.innerText = item 
        ulTareas.appendChild(li)
        
        //Agregar un evento por cada item

        li.addEventListener("dblclick", function (){
            //la idea es que esto nos permita eliminar una tarea
            // console.log("click en tarea");
            tareas.splice(posicion,1);
            // console.log("despues de eliminar", tareas);
            dibujarTareas();
        });
    });
}