// Imports
const { Pool } = require('pg');

// Connecting the project to the database, allowing querying to be performed
const pool = new Pool({
    user: 'example',
    password: 'code',
    database: 'nShape'
})

module.exports = pool;