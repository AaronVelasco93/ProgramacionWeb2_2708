function agregarPantalla(value){
    document.getElementById("display").value += value;
}

function limpiarPantalla(){
    document.getElementById("display").value = "";
}

function calcularResultado(){
    try {
        //5+2
        const resultado = eval(document.getElementById("display").value);
        document.getElementById("display").value = resultado;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}