// node 3_ArrayFilterAndMaps.js

let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "I", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"},
    
]
// Find Age of All Ladies Through Function
let Ladies1 = arr.filter(function(v, i){
    if(v.gender == "F"){
        return true;
    }else{
        return false
    }
}).map(function(v, i){
    return v.age;
});

console.log(Ladies1);


// Find out age of All Ladies
/*
let Ladies = arr.filter(p => p.gender == "F");
console.log(Ladies);
let LaAges  = Ladies.map(L => L.age);
console.log(LaAges);
 


// 2nd Method for Find age of All Ladies 

let ladies = arr.filter(p1 =>p1.gender == "F" ).map(L1 => L1.age);
console.log(ladies);*/






















