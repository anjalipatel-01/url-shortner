const express = require("express");
const path = require("path");
const app = express();
const PORT = 8001;
const { handlegetRedirectUrl } = require("./controllers/url.js");
const urlroute = require('./routes/url.js');
const staticRoute = require("./routes/staticrouter.js");
const userroute = require("./routes/user.js");
const cookieparser = require("cookie-parser");
const {restrictToLoggedinUseronly}  = require("./util/auth.js")

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());


app.use("/url",restrictToLoggedinUseronly,urlroute);
app.use("/user",userroute);
app.use("/",staticRoute);
app.get("/url/:shortid",handlegetRedirectUrl);
app.listen(PORT,()=> console.log("Server is connected!"));

