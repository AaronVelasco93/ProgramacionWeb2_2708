// Importar el modulo HTTP que viene incluido en Node.js para crear un servidor web.
const http = require('http');
// definir un puerto por el cual el servidor escuchará las solicitudes. En este caso, se usará el puerto 3000.
const port = 3000;

// crear el servidor
const server = http.createServer((req,res)=>{
    // Configurar la respuesta HTTP con un código de estado 200 (OK) y un encabezado de tipo de contenido.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Enviar una respuesta de texto al cliente.
    res.end('Hola Mundo');
});
// Iniciar el servidor para que escuche en el puerto definido y mostrar un mensaje en la consola cuando el servidor esté listo.
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});