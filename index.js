// Installed 
// npm i
// npm i -y
// npm init
//  npm install inquirer
// npm install console.table --save
// npm install mysql

const mysql = require('mysql');
const init = require('inquirer');
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
    }
