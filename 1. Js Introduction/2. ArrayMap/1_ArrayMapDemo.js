
// node 1_ArraysMapDemo.js
// Map is itself a fn
// Map takes as input a callback fn (with v and i)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v and i to callback
// callback will process the value and inde x and return a single value
// Single value returned by each run of callback will be collected in a new array
// Map returns that new array

let arr = [2, 5, 9, 8, 15, 11, 6];
let sqarr = arr.map(function(v, i){
    return v * v;
});
console.log(sqarr);

let sqarr2 = arr.map(v => v * v);
console.log(sqarr2);