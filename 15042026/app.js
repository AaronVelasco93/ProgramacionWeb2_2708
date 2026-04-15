// array donde se guardan los usuarios registrados
const usuarios = [];

// obtener los datos del formulario de registro y del area de salida
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

// agregar un evento de submit al formulario
form.addEventListener('submit', 
    function(event) {
    event.preventDefault(); // evitar que el formulario se envíe de forma tradicional
    // obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;

    // crear un objeto con los datos del usuario
    const usuario = {
        nombre: nombre,
        email: email
    };

    // agregar el usuario al array
    usuarios.push(usuario);

    // mostrar los usuarios en formato JSON
    salida.textContent = JSON.stringify(usuarios, null, 2);

});
