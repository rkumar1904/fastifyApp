const { Client } = require('pg');

const client = new Client({
  user: 'billeasy-macmini',
  host: 'localhost',
  database: 'billeasy',
  password: '',
  port: 5432,
});

client.connect();

module.exports = client;
