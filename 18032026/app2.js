/*
var miCarro = new Object();
miCarro.marca='ford';
miCarro.modelo='ikon Fiesta';
miCarro.anio=2013;

console.log(miCarro);

var miCarro={
    marca: 'ford',
    modelo: 'ikon Fiesta',
    anio: 2013
};
console.log(miCarro);
*/
const alumno = {
    id: 987654321,
    nombre: 'Lucía',
    primerApellido: 'Ramírez',
    segundoApelldo: 'Hernández',
    numeroContacto: [5512345678, 5587654321],
    direccion: {
        calle: 'Encino',
        numero: '45',
        lote: '12',
        manzana: 7,
        Colonia: 'San Pedro',
        Alcaldia: 'Coyoacán',
        CP: 04360,
        Ciudad: 'CDMX',
        Pais: 'México'
    },
    educacion: {
        kinder: {
            nombre: "Estrellitas del Saber",
            publica: false,
            hacerPipi: function(){
                console.log("Profe, necesito ir al baño");
            }
        },
        primaria: {
            nombre: "Benito Juárez",
            publica: true,
            tiempoRecredo: '30 min',
            jugar: function(tipoJuego){
                console.log("Estoy jugando a " + tipoJuego);
            }
        },
        secundaria: {
            nombre: "Técnica 42",
            publica: true,
            pubertos: true,
            serRebeldes: function(accion){
                console.log("Me castigaron por hacer " + accion);
            }
        }
    },
    actividadesPersonales: {
        lectura: 'Cien años de soledad',
        fisica: 'nadar',
        actividadCotidiana(actividad){
            return `${this.fisica} en el horario de ${actividad}`;
        }
    }
};

console.log(alumno.actividadesPersonales.actividadCotidiana("06:30 am"));
console.log(alumno.educacion.kinder.hacerPipi());
console.log(alumno.educacion.primaria.jugar("Escondidas"));
console.log(alumno.educacion.secundaria.serRebeldes("Faltar a clase"));/***
 * Kinder
 *  pu
 *  privada
 * Primaria
 * secundaria
 */

console.log(alumno.hasOwnProperty("nombre"));
console.log(alumno.hasOwnProperty("numeroCuenta"));
console.log(alumno);

//crear
alumno.numeroCuenta=413112576;
//leer
console.log(alumno['numeroCuenta']);
//actualizar
alumno.nombre="Jonathan";
console.log(alumno['nombre']);

// eliminar
delete alumno.segundoApelldo;

console.log(alumno);
