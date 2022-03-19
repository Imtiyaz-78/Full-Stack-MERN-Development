
// node 3_ArrayMapDemo.js


let arr = [2, 19, 34, 72, 11, 64, 55, 98];

let oearr = arr.map(function(v, i){
    if(v % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(oearr);

let oearr2 = arr.map(v => v % 2 == 0);
console.log(oearr2);