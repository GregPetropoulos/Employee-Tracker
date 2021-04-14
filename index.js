// Installed 
// npm i
// npm i -y
// npm init
//  npm install inquirer
// npm install console.table --save
// npm install mysql

const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    // My Port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // MySQL password
    password:'password',
    database:'employeeDB',   
});


connection.connect((err) => {
    if (err) throw err;
    badCompany();
  });
  
badCompany = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
              'Add a department',
              'Add an employee',
              'Add a role',
              'View a department',
              'View an employee',
              'View a role',
              'Update employee roles',
              'Update employee managers',
              'View employees by manager',
              'Delete departments, roles, and employees',
              'View the total utilized budget of a department'
            ],
    })
    .then ((answer) => {
        switch(answers.action) {
            case 'Add a department':
            case 'Add an employee':
            case 'Add a role':
                addToCompany(); 
                break;  
            
            case 'View a department':
            case 'View an employee':
            case 'View a role':
                // Bonus case
                case 'View employees by manager':
                viewCompany();
                break;

            case 'Update employee roles':
                // Bonus case
                 case 'Update employee managers':
                updateCompany();
                break;

                //  Bonus delete function
                case 'Delete departments, roles, and employees':
                deleteFromCompany();
                break;

                // Bonus
                case 'View the total utilized budget of a department':
                    budgetOfCompany();
                    break;

                    default:
                        console.log(`Invalid action: ${answer.action}`);
                        break;
        }
    })
}

// fx outside of switch case to handle the prompts

const addToCompany = () => {};
const viewCompany = () => {};
const updateCompany = () => {};
const deleteFromCompany = () => {};
const budgetOfCompany = () => {};




