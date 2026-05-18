const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KDJ@83638377',
  database: 'velora'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected');
});

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(5000, () => console.log('Server started on port 5000'));
