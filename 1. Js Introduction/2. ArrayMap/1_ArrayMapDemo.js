
// node 1_ArrayMapDemo.js
// Map is itself a fn
// Map takes as input a callback fn (with v and i)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v and i to callback
// callback will process the value and inde x and return a single value
// Single value returned by each run of callback will be collected in a new array
// Map returns that new array

// Map ek aesa function hota hai jo input mein function leta hai jise hum callback function boltey hai and map ek square array retutn karta hai 

let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i){
    return v * v;
});
console.log(sqarr);

// Other Way
let sqarr2 = arr.map(v => v * v);
console.log(sqarr2);

// And more other Way 
let sqarr3 = arr.map((v, i) => v * v);
console.log(sqarr3);
