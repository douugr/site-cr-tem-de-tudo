var mysql = require('mysql');
var dbconnect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'aaaa',
	database: 'catalogo'
});

module.exports = dbconnect;