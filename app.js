const express = require('express')
const { prompt } = require('inquirer')
const inquirer = require('inquirer')
const mysql2 = require('mysql2')
//1. connect database
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
})

//db.query

//2. start questions with inquirer
inquirer.prompt([{
    name: 'q',
    type: 'list',
    message: ' what would you like to do?',
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
}]).then((promptAns) => {
    console.log(promptAns.q)
    
    if(promptAns.q === ("view all departments")){
    db.query(`SELECT * FROM department`, function(err, results){

        console.log(results)
    })
    }

    if(promptAns.q === ("view all roles")){
        db.query(`SELECT * FROM role`, function(err, results){
            console.log(results)
        })
    }
    
    if(promptAns.q === ("view all employees")){
        db.query(`SELECT * FROM employee`, function(err, results){
            console.log(results)
        })
    }


})

//console.table