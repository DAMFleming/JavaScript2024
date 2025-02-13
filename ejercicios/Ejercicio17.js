const rl = require('readline-sync');

const regex = /\p{L}\d+?./gu;
let linea;
while ((linea = rl.question("> ")) != "") {
    let secuencias = linea.split(' ');
    
    for (let secuencia of secuencias) {
        if (secuencia.match(regex)) {
            
        }
        else {
            console.log("error: " + secuencia)
        }
    }
}