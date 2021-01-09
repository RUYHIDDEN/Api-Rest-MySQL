const mysql = require('mysql');
var colors = require('colors');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejemplo'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(''.bgRed ,err);
        return;
    }else{
        console.log('Base de datos conectada!'.bgRed)
    }
});

module.exports = mysqlConnection;