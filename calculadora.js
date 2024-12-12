// Declaración de variables iniciales
let continuar = true; // Variable para controlar el bucle

// Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

// Bucle para realizar múltiples operaciones
while (continuar) {
    // Solicitar números y operación al usuario
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:").toLowerCase();

    // Verificar si el usuario quiere salir
    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Adiós!");
        continuar = false;
        break;
    }

    // Realizar la operación y mostrar el resultado
    let resultado = realizarOperacion(num1, num2, operacion);
    alert(`Resultado: ${resultado}`);

    // Preguntar al usuario si desea continuar
    let respuesta = prompt("¿Desea realizar otra operación? (sí/no):").toLowerCase();
    if (respuesta !== "sí") {
        alert("Gracias por usar la calculadora. ¡Adiós!");
        continuar = false;
    }
}
