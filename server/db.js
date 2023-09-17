const mysql = require('mysql2');

// Create a connection to your MySQL database
const connection = mysql.createConnection({
  host: 'localhost',    // Replace with your MySQL server host
  user: 'username',     // Replace with your MySQL username
  password: 'password', // Replace with your MySQL password
  database: 'contactsdb'  // Replace with your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
