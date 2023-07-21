const { DB } = require('./db');
const { prompt } = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
];

const init = () =>
prompt(questions).then(({task}) => {
    if(task == 'view all departments') DB.getDepts().then(init);
    if(task == 'view all roles') DB.getRoles().then(init);
    if(task == 'view all employees') DB.getEmps().then(init);
});

init()