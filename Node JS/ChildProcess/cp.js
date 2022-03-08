 
 // This child Process
 
 const cp = require("child_process");

/*
   //open calculator
  console.log("Try to open calculator");
  cp.execSync('calc');
  console.log("calculator opened");
*/


/*
  // open vs code
  cp.execSync("code")
  console.log("Vs code Is opened")

*/


/*
   //To open chrome 
  cp.execSync("start chrome")

*/
 
 /*
  //To open partcular website 
  cp.execSync("start chrome https://docs.google.com/spreadsheets/d/1AqHODs2yZiLCK6NuOAdgagCKZnu4qzsV7YT7ABa5B9k/edit#gid=0")
  
*/ 
 
let output = cp.execSync('node test.js')
console.log("Output is :" + output)
















