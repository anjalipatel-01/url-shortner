const express = require("express");
const app = express();
const PORT = 8001;

const urlroute = require('./routes/url.js');
const { handlegetRedirectUrl } = require("./controllers/url.js");

app.use(express.json());
app.use("/url",urlroute);
app.get("/:shortid",handlegetRedirectUrl);
app.listen(PORT,()=> console.log("Server is connected!"));

