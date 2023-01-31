const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/route");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", routes);
mongoose.set("strictQuery", false);

app.listen("3005", async() => {await mongoose.connect("mongodb://127.0.0.1:27017/api_web_tech_assignment"), console.log("port is connected to 3005 & DB is ready")});