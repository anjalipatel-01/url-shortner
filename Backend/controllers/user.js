const createuser = require("../models/user.js");
const {v4: uuidv4} = require('uuid');
const {setUser} = require("../util/auth.js");

async function handleuserSignup(req,res) {
    const {name,email,password} = req.body;
    try{
        await createuser(name,email,password);
        return res.redirect("/");
    }catch(error){
        return res.status(500).json({error: "Database error"});
    }
};

async function handleuserlogin(req,res) {
    const {email,password} = req.body;
    const user = await getuserbyemail(email);
    if(!user){
        return res.render('login',{
            error: "Invalid username or password"
        });
    }
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie('uid',sessionId);
    return res.redirect("/");
};

module.exports = {
    handleuserSignup,
    handleuserlogin
}