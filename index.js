const express = require("express");
const app = express();
const PORT = 8001;

const urlroute = require('./routes/url.js');

app.use(express.json());
app.use("/url",urlroute);
app.listen(PORT,()=> console.log("Server is connected!"));

