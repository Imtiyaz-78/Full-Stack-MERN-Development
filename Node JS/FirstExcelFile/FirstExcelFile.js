
// => Steps

// npm init
// npm install minimist
// npm install excel4node => This is node help to create excel file 
// node FirstExcelFile.js --source=teams.json --dest=teams.csv

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);

/* => For check file is Access or not though below
console.log(args.source);
console.log(args.dest);
*/ 

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);  // => This convert JSON to JSO 

let wb = new excel.Workbook(); // Ek excel sheet bani  hai iss function se 

/* => Styling on the sheet 
let hs = wb.createStyle({
    font: {

        bold : true,
        underline: true,
        size : 15,
        color : "red"
    },
    fill: {
        type : "pattern",
        patternType : "solid",
        fgColor : "green",
    }

    
});
*/

for(let i = 0; i < teams.length; i++){
   let sheet = wb.addWorksheet(teams[i].name);
    
   sheet.cell(1, 1).string("Rank");
   sheet.cell(1, 2).number(teams[i].rank);


   sheet.cell(2, 1).string("VS");
   sheet.cell(2, 2).string("Result");

   for(let j = 0; j < teams[i].matches.length; j++){
       sheet.cell(j + 3, 1).string(teams[i].matches[j].vs); 
       sheet.cell(j + 3, 2).string(teams[i].matches[j].result);
   }

} 


wb.write(args.dest); // => To manipulates in Excel jo app create kiye hai us sheet mein  














