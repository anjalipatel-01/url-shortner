const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user:process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

async function connectDb(){
    try{
        await pool.connect();
        console.log("Connected to Database.");
    }catch(err){
        console.log("Database error",err);
    }
};
module.exports = {pool,connectDb};