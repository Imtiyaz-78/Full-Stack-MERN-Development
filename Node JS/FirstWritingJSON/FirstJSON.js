
// npm init
// npm install minimist
// node FirstJSON.js 

let minimist = require("minimist");

let args = minimist(process.argv);

// JSON = JavaScript Object Notation
// Jo JavaScript Ke Obkect ka format hai agar hum usi format mein data ko store kardo toh called JSON  


let s1 = {
    name : "Mumtaz",
    age  : "24",
}; // s1 is object. name and age are properties

console.log(s1.name);
console.log(s1.age);

 
let arr = [
    {
        name : "IMTIYAZ", // arr is object. name and age are properties 
        
        age  : 21,
       // arr is object. name and age are properties 
       // name and age are also called data memebers
    },

    {
        name : "MUSTAK",
        age  :  "25",
    }
];


// Access of Object By Using Dot Operator
console.log(arr[0].name);
console.log(arr[0].age);

console.log(arr[1].name);
console.log(arr[1].age);

