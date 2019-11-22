var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: "isdsp-t"
  });
  
  connection.connect(function(err) {
    if (err) {
        console.log(err.message);
    }else{
        console.log('connected');
        alert('connected');
    }
  });