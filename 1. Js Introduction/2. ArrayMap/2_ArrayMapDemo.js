
// node 2_ArrayMapDemo.js

let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
]

let iarr = arr.map(function (name, i) {
    let partsofname = v.split(" ");
    let fname = partsofname[0];
    let lname = partsofname[1];
    let ffc = fname[0]; // First nane First Character
    let lfc = lname[0]; // Last name Last Character
    return ffc + "." + lfc + ".";
});

console.log(iarr);


// Other Waya 
let iarr2 = arr.map((v, i) => {
    let partsofname = v.split(" ");
    let fname = partsofname[0];
    let lname = partsofname[1];
    let ffc = fname[0]; // First nane First Character
    let lfc = lname[0]; // Last name Last Character
    return ffc + "." + lfc + ".";
});


console.log(iarr2);