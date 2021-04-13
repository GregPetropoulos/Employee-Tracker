
-- Create 3 tables


DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER NOT NULL,
  fkmanager_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  INDEX`idx_role`(role_id),
  CONSTRAINT `fk_role_id`
  FOREIGN KEY (role_id) 
  REFERENCES department(did) ON UPDATE CASCADE ON DELETE RETRICT

);

CREATE TABLE  department (
 did INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NULL,
   PRIMARY KEY (did)  
);

CREATE TABLE roles (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(9,2),
  fkdepartment_id INTEGER NOT NULL,
  PRIMARY KEY (id),
)

SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;

