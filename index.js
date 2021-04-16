// Installed 
// npm i
// npm i -y
// npm init
//  npm install inquirer
// npm install console.table --save
// npm install mysql
const conslTable = require('console.table');
const chalk = require('chalk');
const mysql = require('mysql');
const inquirer = require('inquirer');
// const connection = require('./config/connection')

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
              'Delete departments', 
              'Delete roles',
              'Delete employees',
              'View the total utilized budget of a department',
              'Exit'
            ],
    })
    .then ((answer) => {
        switch(answer.action) {
            case 'Add a department':
                addDepartment();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'Add a role':
                addRole(); 
                break;  

            case 'View a department':
                viewDepartment();
                break;

            case 'View an employee':
                viewEmployee();
                break;

            case 'View a role':
                viewRole();
                break;

                // Bonus case
                case 'View employees by manager':
                viewEmpByManager();
                break;

            case 'Update employee roles':
                updateEmpRoles();
                break;

                // Bonus case
                 case 'Update employee managers':
                updateEmpManagers();
                break;

                //  Bonus delete function
                case 'Delete departments':
                deleteDepartments();
                break;

                case 'Delete roles':
                deleteRoles();
                break;

                case 'Delete employees':
                deleteEmployees();
                break;

                // Bonus
                case 'View the total utilized budget of a department':
                    companyBudget();
                    break;

                    default:
                        console.log(`Invalid action: ${answer.action}`);
                        break;
        }
    })
}

// fx outside of switch case to handle the prompts

const addDepartment = () => {
    // show the current Departments in the database
    query = `SELECT name AS "Departments" FROM department`;
    connection.query(query, (err,results) => {
        if(err) throw err;

        console.log('');
        console.table(chalk.blue('List of the current Departments'), results);
        // stopped here look at answers syntax throughout code
    
    // ask what the name is for the new dept
    inquirer
        .prompt({
            name: 'newDept',
            type: 'input',
            Message: 'What department would you like to add?'
        })
        // take the answer and insert a row into the department table
        .then((answer) => {
            connection.query(`INSERT INTO department(name) VALUES('?')`, answer.newDept)
            badCompany();
               
        });
    });
    
};
const addEmployee = () => {
    // connection.query('Select * FROM roles, Select CONCAT(', (err,results) => {
    //     if(err) throw (err);
    // })

    
};
const addRole = () => {};
const viewDepartment = () => {};
const viewEmployee = () => {};
const viewRole = () => {};
const viewEmpByManager = () => {};
const updateEmpRoles = () => {};
const updateEmpManagers = () => {};
const deleteDepartments = () => {};
const deleteRoles = () => {};
const deleteEmployees = () => {};
const companyBudget = () => {};






