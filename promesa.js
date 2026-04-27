// Ejemplo de uso de async/await
async function obtenerDatosUsuario(id) {
  try {
    // await pausa la ejecución hasta que la promesa (fetch) se resuelva
    const respuesta = await fetch(`https://api.ejemplo.com/usuarios/${id}`);
    const usuario = await respuesta.json();
    console.log(usuario);
  } catch (error) {
    // Manejo de errores si la promesa falla
    console.error("Error al obtener usuario:", error);
  }
}

obtenerDatosUsuario(1);
