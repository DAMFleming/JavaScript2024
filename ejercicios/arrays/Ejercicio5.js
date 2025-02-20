function sumaArrays1(a1, a2) {
    let r = [];
    if (a1 == undefined || a2 == undefined)
        return undefined;
    let n = Math.min(a1.length, a2.length);
    for (var i = 0; i < n; i++) {
        r.push((a1[i] == undefined ? 0 : a1[i]) + (a2[i] == undefined ? 0 : a2[i]));
    }
    while (a1.length > i) {
        if (a1[i] == undefined)
            r.length++;
        else
            r.push(a1[i]);
        i++;
    }
    while (a2.length > i) {
        if (a2[i] == undefined)
            r.length++;
        else
            r.push(a2[i]);
        i++;
    }
    return r;
}

function sumaArrays2(a1, a2) {
    let r = [];
    if (a1 == undefined || a2 == undefined)
        return undefined;
    let n = Math.min(a1.length, a2.length);
    for (var i = 0; i < n; i++) {
        if (a1[i] == undefined || a2[i] == undefined)
            r.length++;
        else
            r.push(a1[i] + a2[i]);
    }
    while (a1.length > i) {
        if (a1[i] == undefined)
            r.length++;
        else
            r.push(a1[i]);
        i++;
    }
    while (a2.length > i) {
        if (a2[i] == undefined)
            r.length++;
        else
            r.push(a2[i]);
        i++;
    }
    return r;
}

let a1 = [,3,1];
let a2 = [,2, , 4, , 5];

console.log(a1);
console.log(a2);
console.log(sumaArrays1(a1, a2));
console.log(sumaArrays2(a1, a2));
