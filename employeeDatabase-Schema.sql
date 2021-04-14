
-- Create 3 tables
DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

-- PARENT TABLE
CREATE TABLE  department (
did INTEGER(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (did)
	);
    
    
-- CHILD TABLE 
CREATE TABLE roles (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(9,2),
  department_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  INDEX `idx_department_id`(department_id),
  CONSTRAINT `fk_department_id`
  FOREIGN KEY (department_id)
  REFERENCES department(did) ON UPDATE CASCADE ON DELETE RESTRICT
  );
    
-- CHILD TABLE
CREATE TABLE employee (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER NOT NULL,
  manager_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  INDEX`idx_role`(role_id),
  CONSTRAINT `fk_role_id`
  FOREIGN KEY (role_id) 
  REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  INDEX `idx_manager`(manager_id), 
  CONSTRAINT `fk_manager_id`
  FOREIGN KEY (manager_id)
  REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT
  );
  

SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;

