const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

const manAsk = async function(allTeam) {
    const answers = await inquirer.prompt([
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
    ]);
    
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    allTeam.push(manager);
}

const engAsk = async function(allTeam) {
    const answers = await inquirer.prompt([
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
    ])
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    allTeam.push(engineer);
}

const intAsk = async function(allTeam) {
    const answers = await inquirer.prompt([
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
    ]);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    allTeam.push(intern);
}

const nextOne = async function(allTeam) {
    const next1 = await inquirer.prompt({
        type: "list",
        message: "What would you like to do next for the team?",
        choices: ["Add an engineer", "Add an intern", "Finish building my team"],
        name: "nextChoice"
    });
    if (next1.nextChoice === 'Add an engineer') {
        await engAsk(allTeam);
        await nextOne(allTeam)
    } else if (next1.nextChoice === 'Add an intern') {
        await intAsk(allTeam);
        await nextOne(allTeam);
    }
}

async function app() {
    const allTeam = [];
    
    try {
        await manAsk(allTeam);
        await nextOne(allTeam);
        
        const r = render(allTeam);

        await writeFileAsync(outputPath, r);
    } catch (err) {
        console.log(err);
    }
}

app();