class Simulador {
    constructor() {
        this.resultado = '';
    }

    capturarEntrada(mensaje) {
        return prompt(mensaje);
    }

    mostrarResultado() {
        alert(this.resultado);
    }
}

class CotizadorSeguros extends Simulador {
    calcularSeguro() {
        let precioBase = 1000;
        let edad = Number(this.capturarEntrada('Ingresa tu edad:'));

        if (edad < 25) {
            precioBase += 500;
        } else if (edad >= 25 && edad < 50) {
            precioBase += 300;
        } else {
            precioBase += 100;
        }

        this.resultado = 'El costo del seguro es: ' + precioBase;
        this.mostrarResultado();
    }
}

class SimuladorCreditos extends Simulador {
    calcularCredito() {
        let monto = Number(this.capturarEntrada('Ingresa el monto del crédito:'));
        let meses = Number(this.capturarEntrada('Ingresa la cantidad de meses para el crédito:'));
        let interes = 0.05;

        for (let i = 0; i < meses; i++) {
            monto += monto * interes;
        }

        this.resultado = 'El monto total a pagar después de ' + meses + ' meses es: ' + this.redondearDosDecimales(monto);
        this.mostrarResultado();
    }

    redondearDosDecimales(numero) {
        return Math.round(numero * 100) / 100;
    }
}

class SimuladorPersonalizado extends Simulador {
    realizarSimulacion() {
        this.resultado = 'Simulación personalizada en construcción.';
        this.mostrarResultado();
    }
}

function iniciarSimulador() {
    let opcion = prompt('Selecciona el tipo de simulador:\n1. Cotizador de Seguros\n2. Simulador de Créditos\n3. Simulador Personalizado');
    
    switch(opcion) {
        case '1':
            let cotizador = new CotizadorSeguros();
            cotizador.calcularSeguro();
            break;
        case '2':
            let simulador = new SimuladorCreditos();
            simulador.calcularCredito();
            break;
        case '3':
            let personalizado = new SimuladorPersonalizado();
            personalizado.realizarSimulacion();
            break;
        default:
            alert('Opción no válida, por favor selecciona 1, 2 o 3.');
    }
}

document.getElementById('btnSimular').onclick = iniciarSimulador;
