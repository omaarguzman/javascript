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

const boton = document.getElementById("boton");
const Nombre = document.getElementById("nombre");
const Ahorro = document.getElementById("ahorro");
const Tiempo = document.getElementById("tiempo");

boton.addEventListener("click", () => {
    function calcularRendimiento(Tiempo) {
        TotalArray[0] = Ahorro;
        TotalArray[1] = Ahorro + (Ahorro * rendimiento);
    
        for (let i = 2; i <= Tiempo; i++) {
            TotalArray[i] = TotalArray[i-1] + (TotalArray[i-1] * rendimiento);
        }
    
        console.table(TotalArray);
    }});



// confirm("Al terminar tu ahorro tendrás $" + TotalArray[tiempoAhorro] + "pesos.");