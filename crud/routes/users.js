const express = require('express');
const router = express.Router();
const db = require('../db');

//mostrar todo los usuarios en raiz
router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al obtener los usuarios' });
            return res.send('Error al obtener los usuarios');
        } else {
            res.render('index', { users: results }); //rederiza la vista index y le pasa los usuarios obtenidos de la base de datos
        }
    });
});
// Agregar usuario
router.post('/add', (req, res) => {
    const { nombre, correo } = req.body; // extrae el nombre y correo del cuerpo de la solicitud (Formulario)
    const query = 'INSERT INTO users (nombre, correo) VALUES (?, ?)'; // consulta SQL para insertar un nuevo usuario
    db.query(query, [nombre, correo], (err, result) => { // ejecuta la consulta con los valores proporcionados
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al agregar el usuario' });
            return res.send('Error al agregar el usuario');
        } else {
            res.redirect('/'); // redirige a la raíz para mostrar la lista actualizada de usuarios
        }
    });
});
// Mostrar el formulario para editar los usuarios existentes
router.get('/edit/:id', (req, res) => {
    const id = req.params.id; // obtiene el ID del usuario a editar desde los parámetros de la URL      
    const query = 'SELECT * FROM users WHERE id = ?'; // consulta SQL para obtener los datos del usuario específico
    db.query(query, [id], (err, results) => { // ejecuta la consulta con el ID proporcionado
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al obtener el usuario' });
            return res.send('Error al obtener el usuario');
        } else {
            if (results.length > 0) {
                res.render('edit', { user: results[0] }); // renderiza la vista de edición y le pasa los datos del usuario a editar
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return res.send('Usuario no encontrado');
            }
        }
    });
});
// Actualizar los datos del usuario editado
router.post('/update/:id', (req, res) => {
    const id = req.params.id; // obtiene el ID del usuario a actualizar desde los parámetros de la URL
    const { nombre, correo } = req.body; // extrae el nuevo nombre y correo del cuerpo de la solicitud (Formulario)       
    const query = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?'; // consulta SQL
    db.query(query, [nombre, correo, id], (err, result) => { // ejecuta la consulta con los nuevos valores y el ID del usuario
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
            return res.send('Error al actualizar el usuario');
        } else {
            res.redirect('/'); // redirige a la raíz para mostrar la lista actualizada de usuarios
        }
    });
});

// Eliminar un usuario
router.get('/delete/:id', (req, res) => {
    const id = req.params.id; // obtiene el ID del usuario a eliminar desde los parámetros de la URL
    const query = 'DELETE FROM users WHERE id = ?'; // consulta SQL para eliminar el usuario específico
    db.query(query, [id], (err, result) => { // ejecuta la consulta con el ID proporcionado
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al eliminar el usuario' });
            return res.send('Error al eliminar el usuario');
        } else {
            res.redirect('/'); // redirige a la raíz para mostrar la lista actualizada de usuarios
        }
    });
     
});
// Exportar las rutas para que puedan ser utilizadas en el archivo principal de la aplicación (app.js)
module.exports = router;