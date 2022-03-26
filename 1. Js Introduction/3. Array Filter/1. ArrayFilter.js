
//node 1.ArrayFilter.js
let arr = [2, 9, 18, 32, 74, 57, 53, 58];
let even = arr.filter(function (v, i) {
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
})


console.log(even);

let odd = arr.filter(v => v % 2 == 1)
console.log(odd);

// Filter Return boolean value interview question
let v1 = arr.filter(v => v % 2 == 1); // filter array mein filter kar element deta hai and thrue or false return kakrke array mein return karta hai 
let v2 = arr.map(v => v % 2 == 1); // Map ek ek element pr traverse karke element deta hai 
console.log(v1);
console.log(v2);


























































