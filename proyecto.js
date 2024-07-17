function iniciarSimulador() {
    let opcion = prompt('Selecciona el tipo de simulador:\n1. Cotizador de Seguros\n2. Simulador de Créditos\n3. Simulador Personalizado');

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


function mostrarResultado(mensaje) {
    alert(mensaje);
}


function cotizadorSeguros() {
    let precioBase = 1000;

    let edad = prompt('Ingresa tu edad:');

    edad = parseInt(edad);

    if (edad < 25) {
        precioBase += 500;
    } else if (edad >= 25 && edad < 50) {
        precioBase += 300;
    } else {
        precioBase += 100;
    }
    return 'El costo del seguro es: ' + precioBase;
}


function simuladorCreditos() {

    let monto = prompt('Ingresa el monto del crédito:');

    monto = parseFloat(monto);

    let meses = prompt('Ingresa la cantidad de meses para el crédito:');

    meses = parseInt(meses);

    let interes = 0.05;


    for (let i = 0; i < meses; i++) {
        monto += monto * interes;
    }

    let resultadoRedondeado = redondearDosDecimales(monto);

    return 'El monto total a pagar después de ' + meses + ' meses es: ' + resultadoRedondeado;
}


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
