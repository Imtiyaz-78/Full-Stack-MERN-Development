
// node 1_HacckerRankNavigate.js --url=https://www.hackerrank.com/auth/login --config=config.json 

// npm init -y
// npm install minimist
// npm install puppeteer -g // g means ye globally installed kar deta hai hamare System mein 

let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require('puppeteer');

let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config, "utf-8");
let config = JSON.parse(configJSON);

async function run() {
    let browser = await puppeteer.launch({
        headless: false, // isse browser dikhega hadless false karne se 
        args: [
            '--start-maximized' // yah full screen mein open karta hai hacker rank ki website ko 
        ],

        defaultViewport: null // isse mobile view mein open nahi hoga desktop mein open hoga by default ye mobile view mein open hota hai

    });

    
    let pages = await browser.pages();
    let page = pages[0];

    await page.goto(args.url);
    // await page.waitForNavigation({waitUntil:"networkidle2"});

    await page.type("input[name='username']", config.userid, {delay: 100}); 
    await page.type("input[name='password']", config.password, {delay: 100});
 
     
    await browser.close();
    console.log("Browser closed");
}

run();
