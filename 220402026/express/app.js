// app.js
//importing express module
const express = require('express');
const path = require('path');

// crear una instancia de express o un objetos de express
const app = express();

//definir una ruta para la raiz del sitio web
app.get('/', (req, res) => {
    //res.send('Hola Mundo con express!');
    //res.sendFile("/Users/huronmarron/Desktop/clases2026/programacionWeb2_2708/220402026/express/index.html");
    res.sendFile(path.join(__dirname, 'index.html'));
});
//puerto en el que se ejecutará el servidorconst PORT = 3000;
const PORT = 3000;

//iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});