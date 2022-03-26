
// node 2_ArrayReduceDemo.js
let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){
    return pv + cv;
}, 5)

console.log(val);

let val2 = arr.reduce((pv, cv, ci) => pv + cv, 5);
console.log(val2);


