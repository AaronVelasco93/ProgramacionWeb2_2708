// Referencia al formulario, el elemento de salida y el botón de descarga
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const descargarBtn = document.getElementById('descargarBtn');

// Evento de envío del formulario y mostrar los datos en formato JSON
// inicializar el array de usuarios desde el localStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

form.addEventListener('submit', 
    function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        
        // Obtener los valores del formulario   
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('correo').value.trim();

        // crear un objetos con los datos del usuario
        const nuevoUsuario = { 
            nombre: nombre,
             email: email 
            };
            // agregar al array de usuarios
            usuarios.push(nuevoUsuario);
            // guardar el array actualizado en el localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // mostrar los usuarios almacenados
        mostrarUsuarios();

        // limpiar el formulario
        form.reset();


});
// mostrar los usuarios almacenados al cargar la página  (si los hay)
mostrarUsuarios();
function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2);

}

// evento para descargar el JSON como un archivo de texto

descargarBtn.addEventListener('click', 
    function() {
        // convertir el array de objetos a texto json
        const contenidoJSON = JSON.stringify(usuarios, null, 2);
        // crear un objetos Blob con el contenido JSON
        // Blob es un contenedor de datos binarios, en este caso se utiliza para crear un archivo de texto con el contenido JSON
        const blob = new Blob([contenidoJSON], { type: 'application/json' });
        // crear un enlace temporal para descargar el archivo blob
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob); // crear una URL temporal para el blob
        enlace.download = 'usuarios.json'; // nombre del archivo a descargar
        enlace.click(); // simular un clic para iniciar la descarga
        
        URL.revokeObjectURL(URL); // liberar el objeto URL después de la descarga

    });


