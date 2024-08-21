document.addEventListener('DOMContentLoaded', function() {
    class Simulador {
        constructor() {
            this.resultado = '';
        }

        mostrarResultado() {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerText = this.resultado;
            this.guardarResultado();
            this.mostrarAnimacion(resultadoDiv);
        }

        guardarResultado() {
            const resultados = JSON.parse(localStorage.getItem('resultados')) || [];
            resultados.push(this.resultado);
            localStorage.setItem('resultados', JSON.stringify(resultados));
        }

        mostrarAnimacion(element) {
            element.style.transition = "opacity 0.5s ease-in-out";
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.opacity = 1;
            }, 100);
        }
    }

    class CotizadorSeguros extends Simulador {
        calcularSeguro(edad) {
            let precioBase = 1000;

            if (edad < 25) {
                precioBase += 500;
            } else if (edad >= 25 && edad < 50) {
                precioBase += 300;
            } else {
                precioBase += 100;
            }

            this.resultado = `El costo del seguro es: ${precioBase}`;
            this.mostrarResultado();
        }
    }

    class SimuladorCreditos extends Simulador {
        calcularCredito(monto, meses) {
            let interes = 0.05;

            for (let i = 0; i < meses; i++) {
                monto += monto * interes;
            }

            this.resultado = `El monto total a pagar después de ${meses} meses es: ${this.redondearDosDecimales(monto)}`;
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
        let formulario = document.getElementById('formulario');
        formulario.innerHTML = `
            <select id="tipoSimulador">
                <option value="1">Cotizador de Seguros</option>
                <option value="2">Simulador de Créditos</option>
                <option value="3">Simulador Personalizado</option>
            </select>
            <button onclick="seleccionarSimulador()">Seleccionar</button>
        `;
    }

    function seleccionarSimulador() {
        let tipoSimulador = document.getElementById('tipoSimulador').value;
        let formulario = document.getElementById('formulario');
        switch(tipoSimulador) {
            case '1':
                formulario.innerHTML = `
                    <label>Edad: <input type="number" id="edad"></label>
                    <button onclick="calcularSeguro()">Calcular Seguro</button>
                `;
                break;
            case '2':
                formulario.innerHTML = `
                    <label>Monto: <input type="number" id="monto"></label>
                    <label>Meses: <input type="number" id="meses"></label>
                    <button onclick="calcularCredito()">Calcular Crédito</button>
                `;
                break;
            case '3':
                formulario.innerHTML = 'Simulación personalizada en construcción.';
                break;
            default:
                alert('Opción no válida, por favor selecciona 1, 2 o 3.');
        }
    }

    function calcularSeguro() {
        let edad = document.getElementById('edad').value;
        let cotizador = new CotizadorSeguros();
        cotizador.calcularSeguro(Number(edad));
    }

    function calcularCredito() {
        let monto = document.getElementById('monto').value;
        let meses = document.getElementById('meses').value;
        let simulador = new SimuladorCreditos();
        simulador.calcularCredito(Number(monto), Number(meses));
    }

    document.getElementById('btnSimular').onclick = iniciarSimulador;

    window.seleccionarSimulador = seleccionarSimulador;
    window.calcularSeguro = calcularSeguro;
    window.calcularCredito = calcularCredito;
});
