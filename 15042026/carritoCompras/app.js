const carrito = []; // array para almacenar los productos en el carrito de compras

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funcion para agregar un producto al carrito de compras
function agregarProducto(carrito, producto,cantidad){
    // buscar si el producto ya existe en el carrito
    const indice = carrito.findIndex(item => item.producto.nombre === producto.nombre);
    if (indice !== -1) {
        // si el producto ya existe, actualizar la cantidad
        carrito[indice].cantidad += cantidad;
    } else {
        // si el producto no existe, agregarlo al carrito
        carrito.push({producto, cantidad});
    }
    mostrarCarrito(carrito);
}
// funcion para mostrar el contenido del carrito de compras
function mostrarCarrito(carrito) {
    const listaProductos = document.getElementById('lista-productos');
     listaProductos.innerHTML = ''; //Limpiar la lista de productos
    
     carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto.nombre} - $${item.producto.precio} x ${item.cantidad}`;
        listaProductos.appendChild(li);
    });

}
// evento para manejar la acciones de agregar productos al formulario
document.getElementById('formulario-producto').addEventListener('submit',
 function(event) {
    event.preventDefault();
    // obtener los valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);
    // creamos un nuevo objeto de tipo producto para agregar a el formulario
    const producto = new Producto(nombre, precio);
    // llamar la funcion agregarProducto para agregar el producto al carrito de compras
    agregarProducto(carrito, producto, cantidad);

    // limpiarFormulario despues de agregar el producto al carrito de compras
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = 1;
 });
