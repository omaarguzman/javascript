// Calculadora de ahorros y rendimientos

alert("Esta es una calculadora que simula los rendimientos que puedes ganar si ahorras con nosotros.");
confirm("¿Deseas realizar una simulación?");

const nombre = prompt("Ingresa tu nombre");
const cantidadAhorro = Number(prompt("Muy bien " + nombre + ", ¿cuánto quieres ahorrar?"));
const tiempoAhorro = Number(prompt(nombre + ", ¿cuántos meses deseas conservar tu ahorro?"));
const rendimiento = 0.05

let TotalArray = [];

function calcularRendimiento(tiempo) {
    TotalArray[0] = cantidadAhorro;
    TotalArray[1] = cantidadAhorro + (cantidadAhorro * rendimiento);

    for (let i = 2; i <= tiempo; i++) {
        TotalArray[i] = TotalArray[i-1] + (TotalArray[i-1] * rendimiento);
    }

    console.table(TotalArray);
}

calcularRendimiento(tiempoAhorro);

alert("Al terminar tu ahorro tendrás $" + TotalArray[tiempoAhorro] + "pesos.");