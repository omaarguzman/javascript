document.getElementById('ahorroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    let montoInicial = parseFloat(document.getElementById('montoInicial').value);
    let tasaInteresAnual = parseFloat(document.getElementById('tasaInteres').value);
    let anios = parseInt(document.getElementById('anios').value);

    // Validar que los campos no estén vacíos
    if (isNaN(montoInicial) || isNaN(tasaInteresAnual) || isNaN(anios)) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Calcular el valor futuro del ahorro con interés compuesto
    let valorFuturo = calcularAhorro(montoInicial, tasaInteresAnual, anios);

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerHTML = `El valor futuro del ahorro después de ${anios} años será: $${valorFuturo}`;

    // Generar y mostrar la tabla de crecimiento del ahorro
    let tablaCrecimientoHTML = '<h2>Tabla de Crecimiento del Ahorro</h2>';
    tablaCrecimientoHTML += '<table>';
    tablaCrecimientoHTML += '<tr><th>Año</th><th>Valor acumulado</th></tr>';

    let montoAcumulado = montoInicial;
    for (let i = 1; i <= anios; i++) {
        montoAcumulado *= (1 + tasaInteresAnual / 100);
        montoAcumulado = Math.round(montoAcumulado * 100) / 100;
        tablaCrecimientoHTML += `<tr><td>${i}</td><td>$${montoAcumulado}</td></tr>`;
    }

    tablaCrecimientoHTML += '</table>';
    document.getElementById('tablaCrecimiento').innerHTML = tablaCrecimientoHTML;
});

function calcularAhorro(montoInicial, tasaInteresAnual, anios) {
    // Convertir la tasa de interés a decimal
    let tasaInteresDecimal = tasaInteresAnual / 100;

    // Calcular el valor futuro del ahorro con interés compuesto
    let valorFuturo = montoInicial * Math.pow(1 + tasaInteresDecimal, anios);

    // Redondear el resultado a 2 decimales
    valorFuturo = Math.round(valorFuturo * 100) / 100;

    return valorFuturo;
}