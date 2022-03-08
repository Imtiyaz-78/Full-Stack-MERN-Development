

// npm init
// npm install minimist
// node FirstWrittingJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

// JSON = JavaScript Object Notation
// Jo JavaScript Ke Obkect ka format hai agar hum usi format mein data ko store kardo toh called JSON  

console.log(args.dest);


let teams = [
    {
        name :"India",
        rank : 1,
        matches:[
            {
                vs : "England",
                result : "Win",
            },

            {
                vs : "Australia",
                result : "win",
            },
        ]

    },

    {
        name : "Australia",
        rank : 3,
        matches:[
            {
                vs: "India",
                result : "Loss",
            },

            {
                 vs: "Englend",
               result : "win",

            }
        ]
    },

    {
        name : "England",
        rank : 2,
        matches : [
            {
                 Vs : "Australia",
                 result : "Loss",

            },

            {
                vs : "India",
                result : "Loss",

            },

        ]

    }

] 

let json = JSON.stringify(teams); // Stringify convert JSO to JSON. JSO Can't be printe or saved. it has to be converted to json via json.singnify so that it can be printed or saved 
fs.writeFileSync(args.dest, json, "utf-8" );
