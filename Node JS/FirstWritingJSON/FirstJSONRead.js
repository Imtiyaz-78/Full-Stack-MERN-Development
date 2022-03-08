
// node FirstJSONRead.js --source=teams.json

let minimist = require("minimist");
let fs = require("fs");


let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, json){
  if(err){
      Console.Console(err);
  }
  else{
     // JSON se wapis JSO banana hoga
     let teams = JSON.parse(json); // JSOn to JSO so that you can manipulatesto object
     console.log(teams[2].matches[1].vs);
  }
});

// JSO
// If you want to print or save a jSON , you will be onvert JSO to JSOn by Using JSON.stringify
// if you want to manipulates a JSON, convert JSOn to JSO by using JSON.parse 

