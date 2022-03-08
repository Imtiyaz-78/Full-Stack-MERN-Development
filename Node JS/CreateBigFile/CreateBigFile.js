
// npm install
// node CreateBigFile.js --dest=big.deta


let minimist = require("minimist");
let fs = require("fs");


let args = minimist(process.argv);


let arr = [];
for(let i = 0; i < 50; i++){
    arr.push(i);
}

let str = arr.join("\n"); // For new line 

fs.writeFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8");
fs.appendFileSync(args.dest, str, "utf-8"); // apend Create Big file approximate 2GB

