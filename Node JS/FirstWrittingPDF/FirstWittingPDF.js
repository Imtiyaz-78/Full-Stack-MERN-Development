

 // npm init
 // npm install minimist
 // npm install pdf-lib
 // node FirstWittingPDF.js --source=teams.json --dest=Worldcup



let minimist = require("minimist");
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest);


for (let i = 0; i < teams.length; i++) {
    let teamFN = path.join(args.dest, teams[i].name); // Making team folder name individual
    fs.mkdirSync(teamFN); // folder is created 

    for (let j = 0; j < teams[i].matches.length; j++) {
        let matchFileName = path.join(teamFN, teams[i].matches[j].vs + ".pdf");
        createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
    }
}

function createScoreCard(teamName, match, matchFileName) {
    let t1 = teamName;
    let t2 = match.vs;
    let result = t1 + " " + match.result;

    let bytesOfPDFTemplate = fs.readFileSync("Template.pdf");
    let pdfdocKaPromise = pdf.PDFDocument.load(bytesOfPDFTemplate);
    pdfdocKaPromise.then(function (pdfdoc) {
        let page = pdfdoc.getPage(0);

        page.drawText(t1, {
            x: 320,
            y: 718,
            size: 12
        });
        page.drawText(t2, {
            x: 320,
            y: 695,
            size: 12
        });
        page.drawText(result, {
            x: 320,
            y: 673,
            size: 12
        });

        let finalPDFBytesKaPromise = pdfdoc.save();
        finalPDFBytesKaPromise.then(function (finalPDFBytes) {
            fs.writeFileSync(matchFileName, finalPDFBytes);
        })
    })
}

