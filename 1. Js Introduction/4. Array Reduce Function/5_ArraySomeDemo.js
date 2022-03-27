
//node 5_ArraySomeDemo.js

// some function reteun single value 
// some ek bhi array mein element even hai toh true return karega and uske next element pr chaek nahi karega wahi se retrun .
// Some Returns true if someone in the array fullfills the criteria
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

