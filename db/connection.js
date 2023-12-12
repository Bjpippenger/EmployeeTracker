const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '!z<DuiPi|0xUrF',
  database: 'employee_tracker_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});