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
        name: 'github',
        message: 'WHAT IS YOUR GITHUB USERNAME',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'WHAT IS YOUR LINKEDIN USERNAME',
    },
]
    // console.log(questions)

    inquirer
    .prompt(questions).then((data) => {
        // console.log(data)
        const htmlContent = generateHTML(data)
        fs.writeFile('index2.html',htmlContent, (err) => {
            err?
            console.log('FAILED TO WRITE FILE'):
            console.log('THE FILE HAS BEEN WRITTEN')
        })
    });
    



    function generateHTML(data) {
        
    const string = `
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 id="name" class="display-4">Hi! My name is ${data.name}</h1>
        <p id="origin" class="lead">I am from ${data.origin}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
            <li id="github" class="list-group-item">My GitHub username is ${data.github}</li>
            <li id="linkedIn"class="list-group-item">LinkedIn:${data.linkedIn} </li>
        </ul>
        </div>
    </div>
    </body>
    </html>
    `
    return(string)
    }
    
    