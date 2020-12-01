//REQUIRED MODULES
const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'WHAT IS YOUR NAME',
    },
    {
        type: 'input',
        name: 'origin',
        message: 'WHERE ARE YOU FROM',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'WHAT IS YOUR GITHUB USERNAME',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'WHAT IS YOUR LINKEDIN USERNAME',
    },
]
    console.log(questions)

    inquirer
    .prompt(questions).then((data) => {


    });