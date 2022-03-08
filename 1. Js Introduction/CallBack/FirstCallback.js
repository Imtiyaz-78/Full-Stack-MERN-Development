 
 // By Using CallBack Read adn write in file


// T1 = Read a file (Disk)
// T2 = Calculate Primes
// T2 is done in Parallel with T1
//
// node FirstCallback.js --source=f1.txt --dest=f2.txt --n=50000




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

 

let minimist = require("minimist");
let fs = require("fs"); // File System 

let args = minimist(process.argv);




//Task 1 area begins 
let t1 = Date.now();
console.log("Task 1 Started at " + t1 % 100000);

//let data = fs.readFileSync(args.source); /*This old method

// Now by call back  /*  Callback:- Jb kisi function ke under function likhte hai toh use callback kahtey hai */
 
fs.readFile(args.source, function(err, data){    
    let t2 = Date.now();
    console.log("Task 1 Finished at " + t2 % 100000);
    console.log(t2 - t1);

});
// Task 1 area Ends


//Task 2 area begins 
let t3 = Date.now();
console.log("Task 2 Started at " + t3 % 10000);

// Task 2 -> Primes
 let arr = []; 
 for(let i = 2; i < args.n; i++){
     let isPrime = IsPrime(i);
     if(isPrime == true){ // Note Necessary == true
         arr.push();
     }
 }



let t4 = Date.now();
console.log("Task 2 Finished at " + t3 % 100000);
console.log(t4 - t3);
// Task 2 area ends



  