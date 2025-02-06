let rl = require('readline-sync');

function menu(){
    console.log('1. Calcular de Celsius a Fahrenheit');
    console.log('2. Calcular de Fahremheit a Celsius');
    console.log('3. Salir');
    return parseFloat(rl.question('> '));
}

var opcion = menu();

while(opcion!=3){
    if (opcion==1){
      var C = parseFloat(rl.question('Introduce los grados Celsius: '));
      var aux = (C * 9/5) +32;
      console.log('Grados Fahrenheit: '+aux)
    }
    else if (opcion==2){
        var F = parseFloat(rl.question('Introduce los grados Fahrenheit: '));
      var aux = 5/9*(F-32);
      console.log('Grados Celsius: '+aux)
    }
    else{
        console.log('Opción incorrecta.')
    }
    opcion = menu();
}