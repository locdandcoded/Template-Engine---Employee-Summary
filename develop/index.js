// What is needed to make this employee template engine???
// User story: I am a development team director, utilizeing this template Engine, so that I can add members to team and see the full staff in a centralized location.
// I need to build a commmand line app  in node to generate a team directory
// The user will be prompted  for user information
//          *employee name
//          *employee title
//          *employee id
//          *employee email
//          *employee office number
//          *employee github id
// If the user is entering a intern the user will be prompted for
//          *intern name
//          *intern title
//          *intern id
//          *intern email
//          *intern office number
//          *intern school
// After every employee is added the user will be asked if they would like to add more employees and if they are done
// Once done the information will be apended to a card and a index.html file will be generated to be opened
//When the user opens index.html in browser the user will see the newly created team 
// I need to run test before writting my app

const inquirer = require('inquirer');


const axios = require("axios");


function promptUserManager() {
    return inquirer.prompt ([

    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "What is this manager's phone number?"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is the manager's GitHub user Name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your manager's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is your manager's email?"
    },    
]);
}

function promptUserIntern() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name"
        },    
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the intern's GitHub user Name?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school they attend?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your intern's email?"
        }

    ]);
}

function promptUserEmployee() {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name"
        },    
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the employee's GitHub user Name?"
        },
        {
            type: 'input',
            name: 'role',
            message: "What is the employee's title?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is your intern's email?"
        }
    ])
    
    }

function promptUserMore() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'moreEmployees',
            choices:[ "Add another manager?", new inquirer.Separator(), "Add another intern?", new inquirer.Separator(),"Add another employee?", new inquirer.Separator(),"Team complete?", new inquirer.Separator() ]
         },  
      
    ]) 

    .then((choice) => {
        
        
            
    });
    
    
}

async function init (){
    console.log("Hello!!! Let's build your development team. Please follow the prompts to add members to your team");

    const managerAnswers = await promptUserManager();
   
    const internAnswers = await promptUserIntern();

    const employeeAnswers = await promptUserEmployee();

    const addMoreEmployees = await promptUserMore();

    const managerGithub =  await axios.get(`https://api.github.com/users/${managerAnswers.gitHub}`)
    // console.log(managerGithub);
    const internGithub =  await axios.get(`https://api.github.com/users/${internAnswers.gitHub}`)
    // console.log(internGithub);
    const employeeGithub =  await axios.get(`https://api.github.com/users/${employeeAnswers.gitHub}`)
    // console.log(employeeGithub);
    
};

init();
    

