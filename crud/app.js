//cargar variables de entorno para la conexion de la aplicacion require('dotenv').config()
require('dotenv').config();
 // importar express (Paquete de node para crear servidores)
const express = require('express');
// importar el modulo de path (Paquete de node para manejar rutas)
const path = require('path');

// crear una instancia de express
const app = express();
// impotar el archivo de rutas donde se meneja la logica para el crud
const userRoutes = require('./routes/users');

//configurar el motor de plantillas ejs para renderizar las vistas de la aplicacion
app.set('view engine', 'ejs');

// configurar la carpeta de vistas para que express sepa donde buscar los archivos ejs
app.set('views', path.join(__dirname, 'views'));

// configurar la carpeta de archivos estaticos para servir css, js, imagenes, etc.
app.use(express.static(path.join(__dirname, 'public')));

// configurar el middleware para parsear el cuerpo de las solicitudes en formato urlencoded (formularios)
//middleware para parsear el cuerpo de las solicitudes del formulario, permitiendo acceder a los datos enviados a través de req.body
app.use(express.urlencoded({ extended: false }));

// mildware para cargar las rutas de la aplicacion, en este caso las rutas relacionadas con los usuarios
app.use('/', userRoutes);

// configurar el puerto en el que se ejecutara el servidor, utilizando la variable de entorno PORT o el puerto 3000 por defecto
const PORT = process.env.PORT || 3005;
// iniciar el servidor y escuchar en el puerto configurado, imprimiendo un mensaje en la consola cuando el servidor este corriendo
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
