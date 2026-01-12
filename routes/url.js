const express = require("express");
const { handleGenerateShortUrl } = require("../controllers/url.js");
const router = express.Router();

// post route
router.get('/',handleCreateNewUrl);

module.exports = router;