
let chargs = process.argv;
let n = parseInt(chargs[2]);

if( n % 2 == 0){
    console.log(n + " is even");
}

else{
    console.log(n + " is odd");
}
