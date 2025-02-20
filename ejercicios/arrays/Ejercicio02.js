
let f= function(array, n){
    if(array==undefined)
        return undefined;
    
    if(n == undefined)
        return array[array.length-1];

    if(n >=0)
        return array.slice(Math.max(0,array.length-n),array.length);

    if(n>= array.length || n<0)
        return array;

}

console.log(f());
let a =[4,3,2,1,0];
console.log(f(a))
console.log(f(a,-5))
console.log(f(a,3))
console.log(f(a,8))
console.log(f(a,6))
console.log(f(a,4))