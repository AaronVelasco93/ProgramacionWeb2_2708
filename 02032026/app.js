let opcionUser = prompt(`
    Elija una opcion:
    1: Libros
    2: Peliculas
    3: Juegos
    `);

switch (opcionUser){
    case "1":
        console.log("1984");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("Minecraft");
        break;
    default:
        console.log("No valido");

}