var mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bas59021726',
    database: 'secure_work_equipment'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected Success!!!");
});


module.exports = con;