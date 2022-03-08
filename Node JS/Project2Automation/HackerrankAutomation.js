

// node HackerrankAutomation.js --url=https://www.hackerrank.com/ --config=config.json 

// npm init -y
// npm install minimist
// npm install puppeteer

let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require('puppeteer');

let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config, "utf-8");
let config = JSON.parse(configJSON);

/*
// 1st Method 
// let browserLaunchKaPromise = puppeteer.launch({headless: false});
// browserLaunchKaPromise.then(function(browser){
//     let pagesKaPromise = browser.pages();
//     pagesKaPromise.then(function(pages){
//         let pageOpenKaPromise = pages[0].goto(args.url);
//         pageOpenKaPromise.then(function(){
//             let browserCloseKaPromise = browser.close();
//             browserCloseKaPromise.then(function(){
//                 console.log("Browser closed");
//             })
//         })
//     })
// })
*/

async function kuchbhi(){
    let browser = await puppeteer.launch({headless: false});
    let pages = await browser.pages();
    await pages[0].goto(args.url);
    await browser.close();
    console.log("Browser closed");
}

kuchbhi(); // Calling Of Function 




























































