const mysql = require('mysql');

const database = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_links'
}

const mysqlConnection = mysql.createConnection(database);


mysqlConnection.connect( (err) => {
    if (!err) {
        console.log('DB is connected');
    } else {
        console.log(err);
    }
});

module.exports = mysqlConnection;