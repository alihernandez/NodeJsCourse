const mysql = require("mysql2");

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'node-connect',
	password: 'PassWordHere',
});

module.exports = pool.promise();