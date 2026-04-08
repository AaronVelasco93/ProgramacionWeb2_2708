document.getElementById("CalculadoraForm").addEventListener("submit", 
    function(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtiene los valores de los campos de entrada
        const numero1 = parseFloat(document.getElementById("num1").value);
        const numero2 = parseFloat(document.getElementById("num2").value);
        const operacion = document.getElementById("operacion").value;
        let resultado;

        // Realiza la operación seleccionada
        switch (operacion) {
            case "suma":
                resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicacion":
                resultado = numero1 * numero2;
                break;
            case "division":
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultado = "Error: División por cero";
                }
                break;
            default:
                resultado = "Operación no válida";
        }
        
        // Muestra el resultado en la página
        document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});