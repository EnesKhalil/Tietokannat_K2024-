const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'enes',
  password: 'ahmed',
  database: 'test_db'
});
module.exports = connection;