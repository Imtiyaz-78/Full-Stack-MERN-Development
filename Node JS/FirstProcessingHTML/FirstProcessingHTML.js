
//npm install jsdom // This is node module Liberary for processing on HTML File which is Scrapping from the Web
// node FirstProcessingHTML.js --source="download.html" 
 

let minimist = require("minimist");
let fs = require("fs");       /* This is use for write and write in file */
let jsdom = require("jsdom"); /* This will be loaded HTML and prepare the DOM for Programmer just like a browser would have*/

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, html){
    
    
    let  dom = new jsdom.JSDOM(html);     /* DOM is tree which represent which shows HTML For Programmer */
    let document = dom.window.document;   /* With the help of window control whole Browser*/
    

    let descs = document.querySelectorAll("div.match-info > div.description");
    // We will get all div's with class description whose parent is div with class match-info
    for(let i = 0; i < descs.length; i++ ){
      console.log(descs[i].textContent);

    }

})



