const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'academic_module'
});

module.exports = db;