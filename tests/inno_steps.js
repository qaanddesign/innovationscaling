/* globals gauge*/
"use strict";
const {  openBrowser, goto, click, button, dropDown, into, write, closeBrowser,   } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

// Login to innovation scaling
step("Goto Innovation Scalling", async function() {
    await goto("http://104.225.220.124:3838/");
    
});

step("Click login", async function() {
    await click("Log in");
});

step("Select Health Informatics Team as User type", async function() {
    await dropDown('User Type').select('Health Informatics Team');
});
    
step("Enter email", async function() {
    await write("benard.zibiri@e4email.net", into("Username/Email"));
});

step("Enter password", async function() {
    await write("kosi2345", into("Password"));
});
    
step("Click login button", async function() {
    await click(button("Log in"));
});