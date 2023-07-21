const db = require('./connection');
const cTable = require('console.table');
class DB {
    constructor(db) {
        this.db = db;
    }

    getDepts = async () => {
        let [data] = await this.db.promise().query('SELECT * FROM department;');
        console.table(data);
    };

    getRoles = async () => {
        let [data] = await this.db.promise().query(`
            SELECT 
                r.id,
                r.title,
                r.salary,
                d.name department
            FROM role r
            JOIN department d
            ON r.department_id = d.id;
        `);
        console.table(data);
    };

    getEmps = async () => {
        let [data] = await this.db.promise().query(`
            SELECT 
                e.id,
                e.first_name,
                e.last_name,
                r.title,
                d.name department,
                r.salary,
                CONCAT(e2.first_name," ",e2.last_name) manager
            FROM employee e
            JOIN role r
            ON e.role_id = r.id
            JOIN department d
            ON r.department_id = d.id
            LEFT JOIN employee e2
            ON e.manager_id = e2.id;
        `);
        console.table(data);
    };
};


module.exports = new DB(db);