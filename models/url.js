const {pool,connectDb} = require("../connection.js");

async function createURL(shortid,redirecturl,id) {
    const querystring = `INSERT INTO urldata (shortid,redirecturl,created_by) VALUES ($1, $2, $3) RETURNING*;`;
    const values = [shortid,redirecturl,id];
    const result = await pool.query(querystring,values);
    return result.rows[0];

}

async function getRedirecturl(shortid){
    const querystring = `SELECT redirecturl from urldata WHERE shortid = $1;`;
    const result = await pool.query(querystring,[shortid]);
    if( result.rows.length === 0) return null;
    return result.rows[0]; 
}

async function viewAnalytics(shortid) {
    const querystring = `SELECT visit_history from urldata WHERE shortid = $1;`;
    const result = await pool.query(querystring,[shortid]);
    if( result.rows.length === 0) return null;
    return result.rows[0];
}

async function logVisit(shortid) {
    const querystring = `UPDATE urldata SET visit_history = visit_history || $1 WHERE shortid = $2;`;
    const newvisit = JSON.stringify([{timestamp: Date.now()}]);
    const result = await pool.query(querystring,[newvisit,shortid]);
    
}

async function getUserurl(id) {
    const querystring = `SELECT * from urldata WHERE created_by = $1;`;
    const result = await pool.query(querystring,[id]);
    if( result.rows.length === 0) return null;
    return result.rows;
    
}

module.exports = {
    createURL,
    getRedirecturl,
    viewAnalytics,
    logVisit,
    getUserurl
}