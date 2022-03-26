
// node 1_ArrayReduceFunction.js

// reduce is a fn
// It takes as input a callback
// callback has 3 parameter - pv, cv, ci
// For the first call to reduce, pv is 0th value, cv is 1st value, and ci is 1


// pv= previos value, cv = current value, ci= current index
let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){ // pv= previos value, cv = current value, ci= current index
    return pv * cv;
})
console.log(val);

/*
10 20 1
200 30 2
6000 40 3
4000 50 4
120000 final answer
*/

// 2nd way or Methid using arrow function
let val2 = arr.reduce((pv, cv, ci) => pv * cv);
console.log(val2);


























