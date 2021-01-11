const { Pool } = require("pg");

const config = {
    production: { 
        database: 'habit',
    },
    test: {
        database: 'habit_test'
    }
}

const pool = new Pool(config[process.env.NODE_ENV]);

const run = q => pool.query(q)

module.exports = { run };