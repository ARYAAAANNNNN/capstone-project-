const mysql2 = require('mysql2');

const db = mysql2.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'dimsum_db',
});

db.connect((err) => {
  if (err) {
    console.error('❌ Error lengkap:', JSON.stringify(err));  // ← ubah ini
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database: dimsum_db');
});

module.exports = db;