CREATE DATABASE IF NOT EXISTS `crud_db`;
USE `crud_db`;
CREATE TABLE IF NOT EXISTS `users` (
    id int auto_increment primary key,
    nombre varchar(255) not null,
    correo varchar(255) not null unique
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
