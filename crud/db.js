//cargamos las variables de entorno de nuestro archivo .env
require('dotenv').config();

//importamos el modulo de mysql2 para conexion a la base de datos
const mysql = require('mysql2');

//creamos la conexion a la base de datos utilizando las variables de entorno
const connection = mysql.createConnection({
    host: process.env.DB_HOST, //host de la base de datos
    user: process.env.DB_USER, //usuario de la base de datos
    password: process.env.DB_PASSWORD, //contraseña de la base de datos
    database: process.env.DB_NAME //nombre de la base de datos
});

// mensaje de conexion exitosa o error en la conexion
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

//exportamos la conexion para poder usarla en otros archivos
module.exports = connection;

