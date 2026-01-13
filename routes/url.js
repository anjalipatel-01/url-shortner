
const express = require("express");
const { handleCreateNewUrl,handleviewAnalytics,handleUserurls } = require("../controllers/url.js");
const router = express.Router();

// routes
router.post('/',handleCreateNewUrl);
router.get('/analytics/',handleUserurls);
router.get('/analytics/:id',handleviewAnalytics);

module.exports = router;