var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'daemida.myddns.rocks',
  user     : 'themartian',
  password : 'marcianos',
  database : 'marcianos'
});
 
connection.connect();
 
connection.query('select * from marciano', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();