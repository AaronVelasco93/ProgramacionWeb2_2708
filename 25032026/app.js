// inicializamos el arreglo en 0
let tareas = [];
//funcion para mostrar el menu 

function mostrarMenu(){
    return parseInt(prompt(`
        Opciones disponibles
        1.- Agregar Tarea
        2.- Ver todas las tareas
        3.- MArcar tarea como completada
        4.- salir
        Elige una opcion
        `));
}
// funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("Introduce una tarea: ");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Ingresa el numero de tarea que quieras cambiar como completada")); 
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada= true;
        alert(`
                La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada
            `);
    }else{
        alert("Numero de tarea invalido");
    }

} 

// funcion mostrarTareas
function verTarea(){
    if(tareas.length === 0){
        alert("No tenemos tareas en la lista");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje+= `${index+1} .- ${tarea.nombre} [${tarea.completada ? "Completada": "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// funcion principal para el flujo de el programa inicial
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        
        let opcion = mostrarMenu();
        
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                // console.log(tareas);
                break;
            case 3: 
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa .....");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta Nuevamente");
        }  //fin de switch


    } //fin while
    // alert("Saliendo del programa");

}

iniciarPrograma();