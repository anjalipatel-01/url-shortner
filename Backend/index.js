const express = require("express");
const path = require("path");
const app = express();
const PORT = 8001;
const urlroute = require('./routes/url.js');
const { handlegetRedirectUrl } = require("./controllers/url.js");
const staticRoute = require("./routes/staticrouter.js");

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/url",urlroute);
app.use("/",staticRoute);
app.get("/url/:shortid",handlegetRedirectUrl);
app.listen(PORT,()=> console.log("Server is connected!"));

