const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const allTeam = [];

const render = require("./lib/htmlRenderer");

const nextOne = function() {
    inquirer.prompt({
        type: "list",
        message: "What would you like to do next for the team?",
        choices: ["Add an engineer", "Add an intern", "Finish building my team"],
        name: "nextChoice"
    });
}

const manaAsk = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        },
    ]).then(function(answers){
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        allTeam.push(manager);
    });
}

const engiAsk = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's GitHub account name?",
            name: "github"
        },
    ]).then(function(answers){
        const engineer = new Intern(answers.name, answers.id, answers.email, answers.github);
        allTeam.push(engineer);
    });
}

const intAsk = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school is the intern from?",
            name: "school"
        },
    ]).then(function(answers){
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        allTeam.push(intern);
    });
}


// TODO: call functions in proper order using async await?
manaAsk();
// engiAsk();
// intAsk();
// render(allTeam);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
