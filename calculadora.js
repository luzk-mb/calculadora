// Declaración de variables
let num1, num2, operacion;
let continuar = true;

while (continuar) {
    // Paso 1: Pedir al usuario que ingrese los dos números y la operación
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt("Ingrese la operación (+, -, *, /):");

    // Paso 2: Función para realizar operaciones
    function realizarOperacion(num1, num2, operacion) {
        if (operacion === "+") {
            return num1 + num2;
        } else if (operacion === "-") {
            return num1 - num2;
        } else if (operacion === "*") {
            return num1 * num2;
        } else if (operacion === "/") {
            if (num2 === 0) {
                return "Error: División por cero no permitida.";
            }
            return num1 / num2;
        } else {
            return "Operación no válida. Por favor, ingrese uno de los siguientes símbolos: +, -, *, /.";
        }
    }

    // Llamar a la función realizarOperacion
    let resultado = realizarOperacion(num1, num2, operacion);

    // Paso 3: Mostrar el resultado de la operación
    alert("Resultado: " + resultado);

    // Paso 4: Preguntar si desea realizar otra operación
    let respuesta = prompt("¿Desea realizar otra operación? (sí/no):");

    // Verificar si el usuario desea continuar o salir
    if (respuesta === null || respuesta.toLowerCase().trim() === "no" || respuesta.toLowerCase().trim() === "salir") {
        alert("¡Gracias por usar la calculadora!");
        continuar = false;  // Terminar el bucle
    }
}
