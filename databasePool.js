const { Pool, Client } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfig');

console.log(databaseConfiguration);
const pool = new Pool(databaseConfiguration);
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
});

const client = new Client(databaseConfiguration);
client.connect();

module.exports = client;