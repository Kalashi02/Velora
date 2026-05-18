const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KDJ@83638377',
  database: 'velora'
});

db.connect(err => {
  if (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
  
  // Fully drop the table to clear out any incorrect schema the user may have restored
  db.query('DROP TABLE IF EXISTS products', (err) => {
    if (err) throw err;
    console.log('Cleared existing table artifacts.');
    
    // Create the schema cleanly with all required columns
    const createTableQuery = `
      CREATE TABLE products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        image VARCHAR(255),
        category VARCHAR(50)
      )
    `;

    db.query(createTableQuery, (err) => {
      if (err) throw err;
      console.log('Recreated products schema successfully.');
      
      const insertQuery = `
        INSERT INTO products (name, description, price, image, category) VALUES ?
      `;

      // Seed with genuine images inside /public
      const products = [
        ['Blush Luxe Heels', 'Elegant blush heels for premium comfort and elevated style.', 4550.00, 'Velora-Blush-Luxe-Heels.png', 'heels'],
        ['Mocha Elegance Heels', 'Sophisticated mocha finish blending modern trends with class.', 3990.00, 'Velora-Mocha-Elegance-Heels.png', 'heels'],
        ['Pearl Radiance Heels', 'Stunning pearl accents on a flawlessly designed statement heel.', 5550.00, 'Velora-Pearl-Radiance-Heels.png', 'heels']
      ];

      db.query(insertQuery, [products], (err, results) => {
        if (err) throw err;
        console.log(`Successfully re-created table and inserted ${results.affectedRows} products!`);
        db.end();
      });
    });
  });
});
