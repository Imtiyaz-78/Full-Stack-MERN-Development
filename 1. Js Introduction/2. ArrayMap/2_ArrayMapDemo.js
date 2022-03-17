let arr = [
    "Sumeet Malik",
    "Amit Malik",
    "Inderjit Malik",
    "Daya Malik",
    "Kunal Malik",
    "Aryan Malik"
]

let iarr = arr.map(function(name, i){
    let partsofname = name.split(" ");
    let fname = partsofname[0];
    let lname = partsofname[1];
    let ffc = fname[0];
    let lfc = lname[0];
    return ffc + "." + lfc + ".";
});

console.log(iarr);