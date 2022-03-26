function f(x) {
    return x * x;
}

function g(x) {
    return 10 * x;
}

function h(x) {
    return x / 5;
}

// h(g(f(5))) = h(g(25)) = h(250) = 50
let arr = [f, g, h];
let val = arr.reduce((pv, cv, ci) => cv(pv), 5);
console.log(val);

let val2 = arr.reduce(function(pv, cv, ci){
    console.log(pv + "-" + cv + "-" + ci);
    return cv(pv);
}, 5);
console.log(val2);
// 5, f, 0
// f(5), g, 1 => 25, g, 1
// g(25), h, 2 => 250, h, 2
// 50