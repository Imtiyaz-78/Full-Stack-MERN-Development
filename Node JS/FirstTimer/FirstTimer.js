o
// node FirstTimer.js --n=10 --d=500 //n indicates kitni bar run karna hai and d indicates kitne time ke baad run karna (in Milli Second)

let minimist= require("minimist");
let args = minimist(process.argv);

let count = args.n;
let time = args.d;
let id = setInterval(function(){
    console.log(count + " Timer to Star");
    count--;

    if(count == 0){
        console.log("TimeOut");
        clearInterval(id);
    }
}, time);