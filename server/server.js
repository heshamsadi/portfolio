const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'contactsdb', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API endpoint to fetch data from the database
app.get('/contacts', (req, res) => {
  const sql = 'SELECT * FROM contacts';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});


app.post('/addContact', (req, res)=>{
   const sql = "insert into contacts (first_name, last_name) values ('" + req.body.first_name + "', '"+req.body.last_name+"')"
   db.query(sql, (err, results)=>{
    if(err){
      console.error('Error Adding Contact to DB:', err)
      res.status(500).json({ error: 'Internal server error while adding to contacts' });
      return;
    }

    res.status(201).json({ message: 'Contact added successfully' });
   })
})


app.delete("/deleteContact/:id", (req, res)=>{
  let contactId = req.params.id;
  let sql = "delete from contacts where id = "+ contactId +" ;"

  db.query(sql, (err, results)=>{
    if(err){
      console.error('error deleting contact:', err)
      res.status(500).json({error: "Internal server error while deleting contact"});
      return;
    }

    res.status(201).json({message: 'contact deleted successfully'})
  })
})





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
