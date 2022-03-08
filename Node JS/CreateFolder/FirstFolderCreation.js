
// => Steps

// npm init
// npm install minimist
 
// node FirstFolderCreation.js --source=teams.json --dest=root

let minimist = require("minimist");
let fs = require("fs");
let path = require("path"); // => to make folder path and => Slash Nahi laga na prta hai isse 


let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

for(let i = 0; i < teams.length; i++){
    let folderName = path.join(args.dest, teams[i].name);
    fs.mkdirSync(folderName); // mkdirSysn => yah ek folder create kar deta hai 
    console.log(folderName);
}






 



