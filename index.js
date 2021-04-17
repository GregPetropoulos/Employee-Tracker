// Installed
// npm i
// npm i -y
// npm init
//  npm install inquirer
// npm install console.table --save
// npm install mysql
// npm i chalk

// INSTALL DEPENDENCIES
const chalk = require("chalk");
const mysql = require("mysql");
const inquirer = require("inquirer");

//VARIABLES
const askNewEmployee = [
  "What is the first name?",
  "What is the last name?",
  "What is their role?",
  "Who is their manager?",
];
const roleQuery =
  'SELECT * FROM roles; SELECT CONCAT(employee.first_name," ",employee.last_name) As full_name FROM employees e';

// CREATING CONNECTION TO SERVER
const connection = mysql.createConnection({
  host: "localhost",

  // My Port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // MySQL password
  password: "password",
  database: "employeeDB",
});
// ESTABLISHED CONNECTION TO SERVER
connection.connect((err) => {
  if (err) throw err;

  console.table(chalk.yellow("\n WELCOME TO EMPLOYEE TRACKER \n"));

  //STARTS MAIN FUNCTION
  badCompany();
});

// INITIAL PROMPTS & SWITCH CASE
badCompany = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add a department",
        "Add an employee",
        "Add a role",
        "View a department",
        "View employees",
        "View a role",
        "Update employee roles",
        "Update employee managers",
        "View employees by manager",
        "Delete departments",
        "Delete roles",
        "Delete employees",
        "View the total utilized budget of a department",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add a department":
          addDepartment();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Add a role":
          addRole();
          break;

        case "View a department":
          viewDepartments();
          break;

        case "View employees":
          viewEmployees();
          break;

        case "View a role":
          viewRoles();
          break;

        // Bonus case
        case "View employees by manager":
          viewEmpByManager();
          break;

        case "Update employee roles":
          updateEmpRole();
          break;

        // Bonus case
        case "Update employee managers":
          updateEmpManagers();
          break;

        //  Bonus delete function
        case "Delete department":
          deleteDepartment();
          break;

        case "Delete role":
          deleteRole();
          break;

        case "Delete employee":
          deleteEmployee();
          break;

        // Bonus
        case "View the total utilized budget of a department":
          companyBudget();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// ALL FX PER CASE
const addDepartment = () => {
  // show the current Departments in the database
  query = `SELECT name AS "Departments" FROM department`;
  connection.query(query, (err, results) => {
    if (err) throw err;

    console.log("");
    console.table(chalk.blue("List of the current Departments"), results);

    // ask what the name is for the new dept
    inquirer
      .prompt({
        name: "newDept",
        type: "input",
        Message: "What department would you like to add?",
      })
      // take the answer and insert a row into the department table
      .then((answer) => {
        connection.query(
          `INSERT INTO department(name) VALUES('?')`,
          answer.newDept
        );
        badCompany();
      });
  });
};
const addEmployee = () => {
  connection.query(roleQuery, (err, results) => {
    if (err) throw err;

    inquirer
      .prompt(
        {
          name: "fName",
          type: "input",
          message: askNewEmployee[0],
        },

        {
          name: "lName",
          type: "input",
          message: askNewEmployee[1],
        },
        {
          name: "role",
          type: "list",
          // A FX in the choices that takes the input result of the first name
          // and loops over newly created array
          choices: function () {
            let choiceArr = results[0].map((choice) => choice.title);
            return choiceArr;
          },
        }
      )
      .then((answer) => {
        connection.query(
          `INSERT INTO employee(first_name,last_name, role_id, manager_id) 
        VALUES ("${answer.fName}","${answer.lName}", ${roleID}, ${manager_ID})`,
          (err, res) => {
            if (err) return err;
          }
        );
        // answer.fName, answer.lName
        // STUCK HERE-------------
        // badCompany();
      });
  });
};
const addRole = () => {};
const viewDepartments = () => {};
const viewEmployees = () => {
  const query = "SELECT * FROM employee";
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    badCompany();
  });
};
const viewRoles = () => {};
const viewEmpByManager = () => {};

const updateEmpRole = () => {
    inquirer
    .prompt([
        {
            name: "id",
            type: "input",
            message: "What is your employee ID?",
        },
        {
            name: "role",
            type: "input",
            message: "What is your role ID?",
        },
    ])
    .then((answers) => {
        const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
        connection.query(query, [answers.id,answers.role],(err, results) => {
        if (err) throw err;
        console.log(results);
        badCompany();
      });
    })
    .catch((err) => {
      throw err;
    });
};
const updateEmpManagers = () => {};
const deleteDepartment = () => {};
const deleteRole = () => {};
const deleteEmployee = () => {};
const companyBudget = () => {};
