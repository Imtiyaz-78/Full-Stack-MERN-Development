
//node 5_ArraySomeDemo.js

// some returns true if someone in the array fullfills the criteria
let arr = [3, 9, 15, 19, 21];
let isThereAnyEvenElement = arr.some(function(v, i){
   
    console.log(v + "-" + i);
    if(v % 2 == 0){
        return true;
    } else {
        return false;
    }
})

console.log(isThereAnyEvenElement)





























