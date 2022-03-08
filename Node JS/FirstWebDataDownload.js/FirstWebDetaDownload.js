

// npm install axios /* This Library to do download data from Web only and you give URL Of Web 

// node FirstWebDetaDownload.js --dest="download.html" --url="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/match-results"  

 let minimist = require("minimist");
 let axios = require("axios");
 let fs = require("fs");

 let args = minimist(process.argv);
 
 let dldPromise = axios.get(args.url); //get axios Liberary Function this download the data from web through url
  
 dldPromise.then(function(response){
     let html = response.data;
     fs.writeFileSync(args.dest, html, "utf-8");

 }).catch(function(err){
     console.log(err);
 })

 