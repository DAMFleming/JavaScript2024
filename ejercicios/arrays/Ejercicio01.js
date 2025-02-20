
let f = function(array, n){


    if(array==undefined)
        return undefined;
    
    if(n == undefined)
        return array[0];

    if(n >=0)
        return array.slice(0,n);

    if(n>= array.length)
        return array;

    

    

    if(n<0)
        return [];
}

console.log(f());
let a =[4,3,2,1,0];
console.log(f(a))
console.log(f(a,-5))