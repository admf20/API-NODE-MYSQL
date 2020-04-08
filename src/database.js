const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'compañia'
});

mysqlConnection.connect((err) => {
    if(err) {
        console.log("el error es", err);
        return;
    }else {
        console.log('La BD esta corriendo correctamente');
    }
});

module.exports = mysqlConnection;