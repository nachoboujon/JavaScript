// Función principal que inicia el simulador
function iniciarSimulador() {
    // Solicita al usuario que seleccione una opción
    let opcion = prompt('Selecciona el tipo de simulador:\n1. Cotizador de Seguros\n2. Simulador de Créditos\n3. Simulador Personalizado');

    // Verifica la opción seleccionada y llama a la función correspondiente
    if (opcion === '1') {
        let resultado = cotizadorSeguros();
        mostrarResultado(resultado);
    } else if (opcion === '2') {
        let resultado = simuladorCreditos();
        mostrarResultado(resultado);
    } else if (opcion === '3') {
        let resultado = simuladorPersonalizado();
        mostrarResultado(resultado);
    } else {
        alert('Opción no válida, por favor selecciona 1, 2 o 3.');
    }
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(mensaje) {
    // Muestra el resultado en una alerta
    alert(mensaje);
}

// Función para calcular el costo de un seguro basado en la edad del usuario
function cotizadorSeguros() {
    // Define el precio base del seguro
    let precioBase = 1000;
    // Solicita al usuario que ingrese su edad
    let edad = prompt('Ingresa tu edad:');
    // Convierte la edad ingresada a un número entero
    edad = parseInt(edad);

    // Verifica la edad del usuario y ajusta el precio base según la edad
    if (edad < 25) {
        precioBase += 500;
    } else if (edad >= 25 && edad < 50) {
        precioBase += 300;
    } else {
        precioBase += 100;
    }

    // Retorna el costo total del seguro
    return 'El costo del seguro es: ' + precioBase;
}

// Función para calcular el monto total a pagar después de un número de meses con interés compuesto mensual
function simuladorCreditos() {
    // Solicita al usuario que ingrese el monto del crédito
    let monto = prompt('Ingresa el monto del crédito:');
    // Convierte el monto ingresado a un número flotante
    monto = parseFloat(monto);
    // Solicita al usuario que ingrese la cantidad de meses para el crédito
    let meses = prompt('Ingresa la cantidad de meses para el crédito:');
    // Convierte la cantidad de meses ingresada a un número entero
    meses = parseInt(meses);
    // Define el interés mensual (5%)
    let interes = 0.05;

    // Calcula el monto total después de aplicar el interés compuesto mensual
    for (let i = 0; i < meses; i++) {
        monto += monto * interes;
    }

    // Redondea el resultado a dos decimales manualmente sin usar Math
    let resultadoRedondeado = redondearDosDecimales(monto);

    // Retorna el monto total a pagar después de los meses especificados
    return 'El monto total a pagar después de ' + meses + ' meses es: ' + resultadoRedondeado;
}

// Función para redondear a dos decimales sin usar Math
function redondearDosDecimales(numero) {
    let partes = numero.toString().split('.');
    let parteEntera = partes[0];
    let parteDecimal = partes[1] ? partes[1].substring(0, 3) : '00';

    if (parteDecimal.length < 3) {
        parteDecimal = parteDecimal + '0';
    }

    let enteroDecimal = parseInt(parteDecimal);

    if (enteroDecimal % 10 >= 5) {
        enteroDecimal = enteroDecimal + (10 - enteroDecimal % 10);
    }

    enteroDecimal = Math.floor(enteroDecimal / 10);

    let resultado = parteEntera + '.' + (enteroDecimal < 10 ? '0' + enteroDecimal : enteroDecimal);
    return resultado;
}

// Función para una simulación personalizada
function simuladorPersonalizado() {
    // Retorna un mensaje indicando que la simulación personalizada está en construcción
    return 'Simulación personalizada en construcción.';
}

// Asigna la función iniciarSimulador al evento onclick del botón con id 'btnSimular'
document.getElementById('btnSimular').onclick = iniciarSimulador;
