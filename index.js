const inquirer = require("inquirer");
const fs = require("fs");

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
            console.log("Please enter Manager's name!");
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
    .then(({ name, employeeId, email, officeNumber }) => {
      console.log(
        `This is user input for name: ${name} ${employeeId} ${email} ${officeNumber}`
      );
    });
};

promptManager();

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
    .then(({ name, employeeId, email, github }) => {
      console.log(
        `This is user input for name: ${name} ${employeeId} ${email} ${github}`
      );
    });
};

// promptEngineer();
