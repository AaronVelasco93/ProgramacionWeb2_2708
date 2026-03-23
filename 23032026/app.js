// inicializamos  un arreglo vacio
let nombres = [];
// funcion para agregar nombres
function agregarNombre(){
    let nombre = prompt ("Ingresa tu nombre");
    if(nombre){
        nombres.push(nombre);
        alert(`! Nombre: ${nombre} Agregado exitosamente`);
    }else{
        alert("El campo no puede estar vacio");
    }
}

// funcion para mostrar nombres
function mostrarNombres(){
    if(nombres.length === 0){
        alert("El arreglo esta vacio,\n No tenemos nombres")
    }else{
        let mensaje = "Nombres almacenados\n";
        nombres.forEach((nombre,indice)=>{
                mensaje+=`${indice+1} . ${nombre}\n`;
        });
        alert(mensaje);
 
    }
}


function mostrarMenu(){

    let opcion;
    do{
        opcion = prompt(`
            Opciones diponibles
            1.- Agregar nombre
            2.- Mostrar nombre
            3.- Salir
            "Elige una opcion"
            `);
        switch(opcion){
            case '1':
                agregarNombre();
                //console.log("Estamos en construccion de modulo ('Agregar nombre ()')");
                break;
            case '2':
                mostrarNombres();
                //console.log("Estamos en construccion de modulo ('mostrar Nombres ()')");
                break;
            case '3':
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no valida. Intenta nuevamente");
        }
    }while(opcion !== '3');
}

// iniciar aplicacion
mostrarMenu();