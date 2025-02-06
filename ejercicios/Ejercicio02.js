/*
Dadas las variables a, b, c y d de tipo int, escribe dos
expresiones distintas, pero que ambas retornen true si 
a es menor que b o c es distinto de d.
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

console.log(a < b || c != d);
console.log(!(a >= b && c == d));