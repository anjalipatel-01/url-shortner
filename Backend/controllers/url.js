
const {nanoid} = require("nanoid");
const pool = require('../models/url.js');
const {createURL,getRedirecturl,viewAnalytics,logVisit,getUserurl} = require('../models/url.js');

async function handleCreateNewUrl(req,res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: "Url is required"});
    }
    const shortid = nanoid(8);
    const id = req.user ? req.user.id : null;
    try{
        await createURL(
            shortid,
            body.url,
            id
        )
        return res.render('home',{
            shortid:shortid,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({error: "Database error"});
    }
};

async function handlegetRedirectUrl(req,res) {
    const shortid = req.params.shortid;
    try{
       const entry = await getRedirecturl(shortid);
       if(!entry){
            return res.status(404).json({error:"Url not found"});
       }
       await logVisit(shortid);
       return res.redirect(entry.redirecturl);
    }catch(error){
        console.log(error);
        return res.status(500).json({error : "Database error"});
    }
};

async function handleviewAnalytics(shortid) {
    const Id = req.params.id;
    try{
        const log = await viewAnalytics(Id);
        if(!log){
            return res.status(404).json({error: "Short url not found"});
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({error: "Database error"});
    }
};

async function handleUserurls(req,res) {
    const Id = req.body.id;
    if(!req.user){
        return res.json([]);
    }
    const urls = await getUserurl(Id);
    return res.json(urls);
}

module.exports = {
    handleCreateNewUrl,
    handlegetRedirectUrl,
    handleviewAnalytics,
    handleUserurls
}