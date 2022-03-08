 
 // This is  without using by Cacllback

 
 // Minimist package:- 
 // Call Backs:- 





// t1 =  Read a file (Disk)
// t2 = Calculate Primes (CPU)
// t4 = Write A file (Disk)
// t4 = Calculate Square Of Primes (CPU)

// node FirstLactOfCallback.js --source=f1.txt --dest=f2.txt --n=40000

let minimist = require("minimist");
let fs = require("fs"); // File System 

let args = minimist(process.argv);

// function for is prime
function IsPrime(x){
    let isPrime = true;
    

    for(let div = 2;  div <= x; div++){
        if( x % div == 0){
         isPrime = false;
         break;
        }
    }

    return isPrime;
}


/*
//Task 1 area begins 
let t1 = Date.now();
console.log("Strating Task at " + t1 % 100000);

let data = fs.readFileSync(args.source);

// Task 2
let t2 = Date.now();
console.log(" Finishing Task1 at " + t2 % 100000);
console.log(t2 - t1);
*/


//Task 2 area begins 
let t3 = Date.now();
console.log(" Strating Task 2 at " + t3 % 10000);

 let arr = []; 
 for(let i = 2; i < args.n; i++){
     let isPrime = IsPrime(i);
     if(isPrime == true){
         arr.push();
     }
 }



// Task 4
let t4 = Date.now();
console.log(" Finishing Task 2 at " + t3 % 100000);
console.log(t4 - t3);
// Task 2 area ends

console.log(t4 - t1); // Total time from task 1 to task 4