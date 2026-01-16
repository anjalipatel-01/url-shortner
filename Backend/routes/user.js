const express = require("express");
const router = express.Router();
const {handleuserSignup,handleuserlogin} = require("../controllers/user.js");

router.post('/',handleuserSignup);
router.post('/login',handleuserlogin);



module.exports = router;