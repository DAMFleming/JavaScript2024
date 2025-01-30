var n = 1;

if (n >= 1)
    console.log("if (n >=1)")

var a = n >= 1 && console.log(n + 1);
var b = n < 1 || console.log(n + 2);
var c = n < 1 || !console.log(n + 3);

console.log(a);
console.log(b);
console.log(c);