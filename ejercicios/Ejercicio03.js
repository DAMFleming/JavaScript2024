/*
Crea un script que calcule el coste total en euros de un viaje
sumando los gastos de alojamiento, alimentación y entretenimiento
que se leerán por teclado.
*/

let rl = require('readline-sync');

let alojamiento = parseFloat(rl.question("Alojamiento: "));
let alimentación = parseFloat(rl.question("Alimentación: "));
let entretenimiento = parseFloat(rl.question("Entretenimiento: "));
let coste = alojamiento + alimentación + entretenimiento;
console.log(`Coste = ${coste.toFixed(2)} €`);