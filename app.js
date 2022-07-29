const express = require('express')
const { prompt } = require('inquirer')
const inquirer = require('inquirer')
const mysql2 = require('mysql2')

// connect database
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
})

//Start questions with inquirer
    inquirer.prompt([{
    name: 'q',
    type: 'list',
    message: ' What would you like to do?',
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee"]
}]).then((promptAns) => {
    console.log(promptAns.q)
    //table if selecting to view all departments
    if(promptAns.q === ("view all departments")){
    db.query(`SELECT * FROM department`, function(err, results){

        console.table(results)
    })
    }
    //table if selecting roles
   else if(promptAns.q === ("view all roles")){
        db.query(`SELECT * FROM role`, function(err, results){
            console.table(results)
        })
    }
    //table if selecting to view all employees
   else if(promptAns.q === ("view all employees")){
        db.query(`SELECT * FROM employee`, function(err, results){
            console.table(results)
        })
    }
    //questions to add a department
   else if(promptAns.q === ("add a department")){
            inquirer.prompt([{
                type: 'input',
                message: 'Type in the department you wish to add:',
                name: 'newDepartment'
        
            }])
            .then(function(answer) { 
                console.log(answer.newDepartment)
                db.connect()
                db.query(`INSERT INTO department(name) VALUES("${answer.newDepartment}");`, function (err, results, fields) {
                    if(err){
                        console.log(err)
                    }
                })
                db.query(`SELECT * FROM department;`, function (err, results){
                    console.table(results)
                })
            })
        }

        //questions to add a role
   else if(promptAns.q === ("add a role")){
         inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Type in the role you wish to add:',
                name: 'newRole'
            },
            {
                type: 'input',
                message: 'Type in what the salary of this role will be:',
                name:'salaryRole'
            },
            {
                type: 'list',
                message: 'Which department should this role work in?',
                name: 'deptRole',
                choices: ['Engineering', 'Sales', 'Marketing', 'Operations', 'Finance', 'Legal']
            }
        ]).then(function(answer){
            console.log(answer.newRole, answer.salaryRole, answer.deptRole)
            db.connect()
            db.query(`INSERT INTO role(title, salary, department_name) VALUES ("${answer.newRole}", "${answer.salaryRole}", "${answer.deptRole}");`, function (err, results){
                if (err){
                    console.log(err)
                }
                db.query(`SELECT * FROM role;`, function (err, results){
                    console.table(results)
                })
            })
        })
    }
    
    //questions to add an employee
   else if(promptAns.q === ("add an employee")){
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the first name of the employee?',
                name: 'firstName',
            },
            {
                type: 'input',
                message: 'What is the last name of the employee?',
                name:'lastName',
            },
            {
                type: 'list',
                message: 'What is the role of that employee?',
                name: 'empRole',
                choices: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                type: 'list',
                message: 'What is the id number of your manager?',
                name: 'empMan',
                choices: [1, 2, 3, 4, 5]
            }
        ])
        .then (function(answers){
            console.log(answers.firstName, answers.lastName, answers.empRole, answers.empMan)
            db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", "${answers.empRole}", "${answers.empMan}");`, function(err, results){
                if (err){
                    console.log(err)
                }
                db.query(`SELECT * FROM employee;`, function (err, results){
                    console.table(results)
                })
            })
        })
    }
})


