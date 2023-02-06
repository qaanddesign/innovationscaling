/* globals gauge*/
"use strict";
const {  openBrowser, goto, click, button, dropDown, into, write, closeBrowser, tap, checkBox,  } = require('taiko');
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

// Fill and Submit form

step("Goto Innovation", async function() {
    await goto("http://104.225.220.124:3838/");
    
});

step("Click Health Priority Needs", async function() {
    await click("Health Priority Needs");
});
        
step("Click Submit a Health Priority Need", async function() {
    await click(button("Submit a Health Priority Need"));
});

step("Enter First name", async function() {
    await write("Testing", into("First Name"));
});


step("Enter last name", async function() {
    await write("Team", into("Last Name"));
});

step("Enter employee number", async function() {
    await write("123456789", into("Employee Number"));
});           
    
step("Enter email in field", async function() {
    await write("testing@e4email.net", into("Email"));
});        
        
step("Enter address", async function() {
    await write("8 Kukawa Close", into("Address"));
}); 
        
step("Write IT and Design in Health Facility", async function() {
    await write("IT and Design", into("Health Facility/Department"));
});         
        
step("Write QA Lead in Health Department Head", async function() {
    await write("QA Lead", into("Health Facility/Department head"));
}); 

step("Enter testing email in Health Department email", async function() {
    await write("testing@e4email.net", into("Health Facility/Department head email"));
});

step("Write Gauge Test in Health need", async function() {
    await write("Gauge test", into("Title of health need"));
});

step("Write text in description of health challenge", async function() {
    await write("This is a overcome the challenge of automation tests", into("Description of health need/challenge"));
});
        
step("Write text in description of required solution", async function() {
    await write("We will use the automation tool gauge with taiko to overcome the challenge", into("Description of the required solution"));
});        
        
step("Click program area", async function() {
    await click("Select Program Area");
});           

step("Click Mental Health", async function() {
    await click("Mental health");
});

step("Click Specific Program Area", async function() {
    await click("Select Specific Program Areas");
});

step("Select Schizophrenia", async function() {
    await click("Schizophrenia");
});

step("Tap Target users", async function() {
    await tap('Target end users');
});

step("Write The QA Team in Benefits", async function() {
    await write("The QA Team", into("Benefits to end-users and other beneficiaries"));
});

step("Accept the terms", async function() {
    await checkBox('I have read and accepted the').check();
});

step("Accept Disclaimer", async function() {
    await checkBox('Disclaimer: I have no personal interest and financial implications connected to this health need/challenge').check();
});

step("Click submit for approval", async function() {
    await click(button("Submit for Approval"));
});

step("Click confirm submission", async function() {
    await click(button("Confirm Submission"));
});