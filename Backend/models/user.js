const {pool} = require("../connection.js");
async function createuser(name,email,password) {
    const querystring = `INSERT INTO users (name, email,password) VALUES ($1, $2, $3) RETURNING*;`;
    const values = [name,email,password];
    const result = await pool.query(querystring,values);
    return result.rows[0];
    
}

async function getuserbyemail(email) {
    const querystring = `SELECT * from users WHERE email = $1;`
    const result = await pool.query(querystring,[email]);
    return result.rows[0];
    
};
module.exports = {
    createuser,
    getuserbyemail
}