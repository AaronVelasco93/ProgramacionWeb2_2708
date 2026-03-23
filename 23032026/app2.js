let productos =[
    {nombre: 'Camisa', precio: 300},
    {nombre: 'Pantalon', precio: 500},
    {nombre: 'Zapatos', precio: 750},
    {nombre: 'Sombrero', precio: 350}
];

let carrito=[];

function mostrarMenu(){
    let menu = "Selecciona un producto a agregar\n";
    for (let i = 0; i< productos.length; i++){
        menu+=(i+1)+" . "+ productos[i].nombre+" - $"+productos[i].precio+"\n";
    }
    menu += (productos.length+1)+".- Ver carrito y Total\n";
    menu += (productos.length+2)+".- Salir";
    
    return menu;
}

function agregarAlCarrito(index){
    let productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log("\nProducto "+productoSeleccionado.nombre+" \nAgregado a el carrito");
   
}

function mostrarCarritoTotal(){
    if(carrito.length === 0){
        console.log("carrito vacio");

    }else{
        let mensajeCarrito="Carrito de compras\n";
        var total = 0;
        for(let i = 0; i<carrito.length;i++){
            mensajeCarrito+="\n"+(i+1)+" . "+carrito[i].nombre+"-"+carrito[i].precio+"\n";   
            total+= carrito[i].precio;
        }
        mensajeCarrito+="\nTotal: $"+total;
        console.log(mensajeCarrito);
    }
}

let opcion;

do{
        opcion = prompt(mostrarMenu());
        opcion = Number(opcion);

        if(isNaN(opcion) || opcion < 1 || opcion > productos.length + 2 ){
            console.log("Opcion no es valida");
        }else if( opcion>=1 && opcion <= productos.length ){
            agregarAlCarrito(opcion - 1);
        }else if( opcion === productos.length+1){
            mostrarCarritoTotal();
        }

}while(opcion !== productos.length +2);
 console.log("Gracias por su visita")