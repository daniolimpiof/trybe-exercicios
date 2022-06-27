const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', 
  user: 'trybe', 
  password: '5566',
  database: 'rest_exercicios'});

module.exports = connection;