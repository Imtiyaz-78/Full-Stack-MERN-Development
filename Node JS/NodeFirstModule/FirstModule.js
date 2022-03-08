

// npm install minimist
let parser = require('minimist');
let args = parser(process.argv);


let name = args.name;
let age = args.age;
 
if(age > 30){
    console.log(" Hello " + name + " you must Go");

}
else{
    console.log(" Heya " + name + " where is the party Tonight?")
}
 

// command for Terminal 
// 1. node FirstModule.js - 4 -y 10
// 2. node FirstModule.js --name="Imtiyaz" --"Ahmad"
// 3. node FirstModule.js --name="Imtiyaz" --age=30
































