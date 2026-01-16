const express = require("express");
const { getUserurl } = require("../models/url");
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        const Id = req.user.id;
        const allurls = await getUserurl(Id);
        return res.render("home",{
            urls: allurls
        });
    }catch(error){
        console.error("Error fetching URLs:", error);
        return res.status(500).send("Internal Server Error");
    }
});

router.get('/signup',(req,res)=>{
    return res.render("signup");
});

router.get('/login',(req,res)=>{
    return res.render("login");
});

module.exports = router;