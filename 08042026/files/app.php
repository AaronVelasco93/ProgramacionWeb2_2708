<?php
    $numero1 = $_POST['num1'] ?? 0;
    $numero2 = $_POST['num2'] ?? 0;
    $suma = $numero1 + $numero2;
    echo "La suma de $numero1 y $numero2 es: $suma";
?>