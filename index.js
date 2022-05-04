const inquirer = require("inquirer");
const fs = require("fs");
const { Console } = require("console");

const teamMembers = {
  manager: [],
  engineer: [],
  intern: [],
};

const promptManager = () => {
  console.log(`
    =============
    Add a New Manager
    =============
    `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name (Required)",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your employee ID",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter an employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your Email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office Number",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      console.log(`This is manager info`, data);
      teamMembers.manager.push(data);
      console.log(teamMembers);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an options from the following menu ",
        choices: [
          "add an engineer",
          "add an intern",
          "finish building my team",
        ],
      },
    ])
    .then(({ menu }) => {
      switch (menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
    =============
    Add a New Engineer
    =============
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name (Required)",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your employee ID",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter an employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your Email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter your github username!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      console.log(`This is engineer info:`, data);
      teamMembers.engineer.push(data);
      promptMenu();
    });
};

const promptIntern = () => {
  console.log(`
    ===================
    Add an Intern
    ===================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name (Required)",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your intern's employee ID",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter intern's employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter intern's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school name",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter inter's school name");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      console.log(`intern's info:`, data);
      teamMembers.intern.push(data);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
    ===================
    Finished building my team!
    ===================

    `);
};

promptManager();
