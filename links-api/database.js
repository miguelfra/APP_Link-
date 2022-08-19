const mysql = require('mysql');

const database = {
    host: '************',
    user: '************',
    password: '************',
    database: '************'
}

const mysqlConnection = mysql.createPool(database);


module.exports = mysqlConnection;