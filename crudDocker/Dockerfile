# Imagen base oficial de Node.js para ejecutar la aplicacion Express.
FROM node:20-alpine

# Carpeta interna donde vivira el codigo dentro del contenedor.
WORKDIR /app

# Copiamos primero los archivos de dependencias para aprovechar la cache de Docker.
COPY package*.json ./

# Instalacion limpia y reproducible basada en package-lock.json.
RUN npm ci

# Copiamos el resto del proyecto dentro de la imagen.
COPY . .

# Puerto interno que usa la aplicacion. docker-compose lo publica hacia la maquina local.
EXPOSE 3005

# Comando que arranca el servidor Express.
CMD ["npm", "start"]
