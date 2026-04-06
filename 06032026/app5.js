const boton = document.querySelector('#boton');
const parrafo = document.querySelector('#parrafo');

boton.addEventListener('click', () => {
    parrafo.textContent = '¡Hola, mundo!';
});