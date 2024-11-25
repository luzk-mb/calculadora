// Paso 1: Declaración de variables
let num1 = 10;  // Primer número
let num2 = 5;   // Segundo número
let operacion = "suma";  // Operación matemática a realizar

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    let resultado;

    // Operaciones según el valor de 'operacion'
    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        // Paso 3: Validación de división por cero
        if (num2 === 0) {
            return "Error: No se puede dividir por cero";
        }
        resultado = num1 / num2;
    } else {
        // Si la operación no es válida
        return "Error: Operación no válida";
    }

    return resultado;
}

// Paso 4: Bucle para realizar múltiples operaciones
let continuar = true;

while (continuar) {
    // Pedir al usuario que ingrese los dos números y la operación
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");

    // Llamar a la función realizarOperacion
    let resultado = realizarOperacion(num1, num2, operacion);

    // Mostrar el resultado
    alert("Resultado: " + resultado);

    // Preguntar al usuario si desea realizar otra operación
    let respuesta = prompt("¿Desea realizar otra operación? (sí/no):");

    // Verificar si el usuario ha ingresado algo
    if (respuesta === null) {
        alert("¡Gracias por usar la calculadora!");
        continuar = false;  // Terminar el bucle si el usuario cancela
    } else {
        // Convertir la respuesta a minúsculas solo si no es null
        respuesta = respuesta.toLowerCase();
        
        // Si el usuario ingresa 'no' o 'salir', terminar el bucle
        if (respuesta === "no" || respuesta === "salir") {
            alert("¡Gracias por usar la calculadora!");
            continuar = false;
        }
    }
}