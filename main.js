// Calculadora de ahorros y rendimientos

// alert("Esta es una calculadora que simula los rendimientos que puedes ganar si ahorras con nosotros.");
// confirm("¿Deseas realizar una simulación?");

// const nombre = prompt("Ingresa tu nombre");
// if(!isNaN(nombre)) {
//     alert("Ingresaste un dato no válido");
// }

// const cantidadAhorro = Number(prompt("Muy bien " + nombre + ", ¿cuánto quieres ahorrar?"));
// // if(!isNaN(cantidadAhorro)) {
// //     alert("Ingresaste un dato no válido");
// // }

// const tiempoAhorro = Number(prompt(nombre + ", ¿cuántos meses deseas conservar tu ahorro?"));
// // if(!isNaN(tiempoAhorro)) {
//     alert("Ingresaste un dato no válido");
// }

const rendimiento = 0.05
let TotalArray = [];

// function calcularRendimiento(tiempo) {
//     TotalArray[0] = cantidadAhorro;
//     TotalArray[1] = cantidadAhorro + (cantidadAhorro * rendimiento);

//     for (let i = 2; i <= tiempo; i++) {
//         TotalArray[i] = TotalArray[i-1] + (TotalArray[i-1] * rendimiento);
//     }

//     console.table(TotalArray);
// }

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const Nombre = document.getElementById("nombre");
    const Ahorro = parseInt(document.getElementById("ahorro"));
    const Tiempo = parseInt(document.getElementById("tiempo"));
    function calcularRendimiento(ahorro, tiempo) {
        TotalArray[0] = ahorro;
        TotalArray[1] = ahorro + (ahorro * rendimiento);

        for (let i = 2; i <= tiempo; i++) {
            TotalArray[i] = TotalArray[i - 1] + (TotalArray[i - 1] * rendimiento);
        }

        console.table(TotalArray[i]);
    }
    
});

console.log(TotalArray);

// confirm("Al terminar tu ahorro tendrás $" + TotalArray[tiempoAhorro] + "pesos.");