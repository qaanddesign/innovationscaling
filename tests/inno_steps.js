/* globals gauge*/
"use strict";
const {  openBrowser, goto, click, button, dropDown, into, write, closeBrowser, tap, checkBox, to, attach, scrollUp, scrollDown, radioButton, below, } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

// Login to innovation scaling
step("Open Innovation Scalling", async function() {
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

// Fill and Submit Health Needs form

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


// Fill and subit Inniovation Proposal Form
step("Goto Innovation Scalling", async function() {
    await goto("http://104.225.220.124:3838/");
    
});

step("Click Log Out", async function() {
    await click("Log-out");
});

step("Click Innovation Proposal", async function() {
    await click("Innovation Proposal");
    
});

step("Click submit Innovation Proposal Button", async function() {
    await click(button("Submit Innovation Proposal"));
    
});

step("Click solution for One title health need", async function() {
    await click("Solution for One title health need");
    
});
    
step("Click Submit an innovation Proposal", async function() {
    await click("Submit an innovation Proposal");
    
});    

step("Write Maureen as username", async function() {
    await write("maureen", into("Username/Email"));
    
});     

step("Write the password", async function() {
    await write("12345678", into("Password"));
    
});

step("Click on the Log in button", async function() {
    await click(button("Log in"));
    
});

step("Click Product or Technological innovations Checkbox", async function() {
    await checkBox('Product or Technological innovations').check();
    
});
    
step("Write Name/Title of solution", async function() {
    await write("New Innovation", into("Name/Title of solution"));
    
});    

step("Write Describe the solution", async function() {
    await write("This new solution is going to revolutionize how we do things", into("Describe the solution and how it addresses/solves the problem described above"));
    
});

step("Write How the solution is innovative", async function() {
    await write("This Innovation has never been seen before", into("How is the solution innovative"));
    
});

step("Write If there are similar solutions available", async function() {
    await write("This solution has never been used by anyone else before", into("If there are similar solutions available, what differentiates the solution from the others"));
    
});
    
step("Click Select stage of solution development", async function() {
    await click('Select stage of solution development');
    
});

step("Click Stage 1: Ideation", async function() {
    await click('Stage 1: Ideation');

});

step("Click Select Stage of clinical development", async function() {
    await click('Select Stage of clinical development');

});

step("Click Clinical trial", async function() {
    await click('Clinical trial');

});

step("Click Select Solution subject to regulatory requirements", async function() {
    await click('Select Solution subject to regulatory requirements');

});
    
step("Click Yes", async function() {
    await click("Yes");
});    

step("Click select regulatory requirements", async function() {
    await click("select regulatory requirements");
});

step("Click Nutriceutical", async function() {
    await click("Nutriceutical");
});

step("Write None", async function() {
    await write("None", into("If Other selected, please describe"));
});
    
step("Click status of regulatory requirement of solution.", async function() {
    await click('status of regulatory requirement of solution.');
});

step("Click Not Applied", async function() {
    await click("Not Applied");
});
    
step("Click select what funds have been raised", async function() {
    await click("select what funds have been raised");
});   

step("Click $10,000", async function() {
    await click("< $10,000");
});

step("Write A little below 100 in How many paid employees work to support the product/solution", async function() {
    await write("A little below 100", into("How many paid employees work to support the product/solution"));
});    

step("Click Next Page", async function() {
    await click("Next Page");
});

step("Scroll Up", async function() {
    await scrollUp(2000)
});

step("Write the solution's impact to date", async function() {
    await write("It has had a good impact", into("Describe the solution's impact to date"));
});

step("Scroll down", async function() {
    await scrollDown(50)
});

step("Click on select option", async function() {
    await click("Select option...");
});

step("Click on Urban", async function() {
    await click("No");
});

step("Write the context", async function() {
    await write("There is no major context", into("Describe the context"));
});    

step("Click on the dropdown", async function() {
    await click("Select option...");
});

step("Click No", async function() {
    await click("Urban");
});

step("Write about the critical steps", async function() {
    await write("This is a positive scenario", into("What are the next critical steps you need to take to get to the next level, and what support is required"));
});

step("Write about the potential for scale", async function() {
    await write("This is a positive scenario", into("What is the potential for scale?"));
});


step("Write about the challenges for going to scale", async function() {
    await write("This is a positive scenario", into("What are the challenges for going to scale?"));
});


step("Write about yourself", async function() {
    await write("The pioneer", into("Please write a short description about yourself, your qualification"));
});
    
step("Move down", async function() {
    await scrollDown(500)
});

step("Upload file", async function() {
    await attach('C:\\Users\\e4e\\Desktop\\innovate\\Checklist.pdf', 'Upload',{force:true});
});

step("Upload the file", async function() {
    await attach('C:\\Users\\e4e\\Desktop\\innovate\\Checklist.pdf', 'Upload',{force:true});
});

step("Check the Pivacy policy", async function() {
    await checkBox('I have read and accepted the Privacy policy & Confidential Non-Disclosure Clause').check();
});
    
step("Check the Intellectual property statement", async function() {
    await checkBox('I have read and accepted the Intellectual Property statement').check();
});

step("Submit for approval", async function() {
    await click("Submit for approval");
});


// Partner with us form

step("Subit parnter with us form", async function() {
    await goto("http://104.225.220.124:3838/");
    await click("Partner With Us");
    await click("Become a partner");
    await click("Solution for five health need");
    await scrollDown(500);
    await click("Partner on innovation");
    await write("kosi.dimoha+20@e4email.net", into("Username/Email"));
    await write("kosi1234", into("Password"));
    await click("Log in");
    await write("I would love to partner with this innovation because i believe it will work", into("Why would you like to partner on this innovation?"));
    await write("With my time and money", into("How would you like to partner on this innovation?"));
    await write("Working on the task", into("Potential next steps"));
    await radioButton(below('Partner intends to bid for the opportunity for the above-mentioned Innovation Reference Number and submit a bid for consideration.')).select();
    await radioButton(below('There are no facts or circumstances that could give rise to, our employees or contractors working for us having an organizational, financial or personal conflict of interest with the innovation or innovator(s)')).select();
    await radioButton(below('Partner has been in a position to influence or shape the design or development of the innovation and may have the effect of distorting competition and affecting the fairness and integrity of the new/current partnership process')).select();
    await radioButton(below('Partner certifies that all its employees/contractors will maintain confidentiality in all matters relating to the above innovation need, and will not make any unauthorized disclosure of any confidential information provided by the ministry or innovator')).select();
    await write("Time, Money, Human Power", into("Please state all resources available to make a successful partnership for the above innovation"));
    await checkBox('I have read and accepted the').check();
    await click("Submit");
});