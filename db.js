const mysql = require('mysql2');

const dbName = 'mydb2';

//MySQL details
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port:  3306,
    user: 'root',
    password: 'Shashank@2001',
    database: 'mydb2',
    multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});


module.exports = {
    mysqlConnection,
    dbName
};
