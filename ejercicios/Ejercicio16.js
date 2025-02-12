/*
 *  Script que lee nombres por teclado y muestre el resultado de
 *  sustituir los caracteres centrales (todos menos el primero y
 *  el último) por asteriscos. Se ha de tener en cuenta que cada
 *  nombre puede estar precedido y/o seguido de un número arbitrario
 *  de espacios en blanco y que, de ser así, estos no aparecerán en
 *  el resultado.
 * 
 *  El script finaliza cuando el usuario introduce una línea en blanco.
 */
const rl = require('readline-sync');

let linea;
//while ((linea = rl.question('Escribe el nombre:'(nombre))).length) {
while ((linea = rl.question('Escribe el nombre:').trim()) != "") {
    const resultado = sustitirCaracter(linea);
    console.log(resultado);
}
rl.close;

function sustitirCaracter(nombre){
    if(nombre.length <=2){
        return nombre;
    }
    const primerCaracter =nombre [0];
    const ultimoCaracter = nombre[nombre.length -1]
    const asteriscos = '*'.repeat(nombre.length -2)
    return `${primerCaracter}${asteriscos}${ultimoCaracter}`;
}



