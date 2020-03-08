var mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'sw_store'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected Success!!!");
});


module.exports = con;