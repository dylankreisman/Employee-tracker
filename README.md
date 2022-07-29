# Employee-tracker

## Description
The purpose of this project is to create a back-end, command-line applicaiton that allows users to manage a company's employee database. The packages and technologies involved were:

## Technologies Used
- Inquirer
- MySQL
- Node.JS

## Functional Demonstration
[Video](https://youtu.be/cNyitX4qE30)

## Code Snippet
The snippet below demonstrates how I asked the initial questions with inquirer, and then creating a promise function to that would show all the departments if that was the choice the user wanted to return.

```
inquirer.prompt([{
    name: 'q',
    type: 'list',
    message: ' What would you like to do?',
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee"]
}]).then((promptAns) => {
    console.log(promptAns.q)
    if(promptAns.q === ("view all departments")){
    db.query(`SELECT * FROM department`, function(err, results){
        console.table(results)
    })
    }
```

## Links
[LinkedIn](https://www.linkedin.com/in/dylan-kreisman-3752b1160/)
[GitHub](https://github.com/dylankreisman/)