const {createConnection, connect } = require('mysql2');

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employees_db'
});

module.exports = db;