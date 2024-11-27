const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Lhd1234',
    database: 'fsms-data',
    port: 3307,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err.message);
    } else {
        console.log('Connection to MySQL database successful!');
        connection.release();
    }
});

module.exports = pool.promise();