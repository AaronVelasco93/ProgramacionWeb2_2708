# CRUD Docker

Proyecto CRUD con Node.js, Express, EJS y MySQL separado en dos contenedores:

- `app`: ejecuta la aplicacion web.
- `db`: ejecuta la base de datos MySQL.

## Requisitos

- Docker
- Docker Compose

## Estructura Docker

- `Dockerfile`: crea la imagen de la aplicacion Node.js.
- `docker-compose.yml`: levanta la aplicacion y la base de datos como servicios separados.
- `files/db.sql`: script que crea la base `crud_db` y la tabla `users` cuando MySQL inicia por primera vez.
- `.dockerignore`: evita copiar archivos innecesarios dentro de la imagen.

## Ejecutar el proyecto

Desde la carpeta del proyecto:

```bash
docker compose up -d --build
```

Luego abre:

```text
http://localhost:3005
```

## Detener los contenedores

```bash
docker compose down
```

## Reiniciar desde cero la base de datos

Si quieres borrar los datos guardados y volver a ejecutar `files/db.sql`:

```bash
docker compose down -v
docker compose up --build
```

## Variables de entorno usadas por la aplicacion

Estas variables estan definidas en `docker-compose.yml` para el contenedor `app`:

```text
PORT=3005
DB_HOST=db
DB_USER=crud_user
DB_PASSWORD=crud_password
DB_NAME=crud_db
```

`DB_HOST=db` funciona porque Docker Compose crea una red interna donde el servicio de MySQL se llama `db`.

## Conexion directa a MySQL

El contenedor de base de datos publica el puerto `3306`, por lo que puedes conectarte desde tu maquina con:

```text
Host: localhost
Puerto: 3306
Usuario: crud_user
Password: crud_password
Base de datos: crud_db
```
