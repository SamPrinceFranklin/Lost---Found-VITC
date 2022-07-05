const express = require("express");
const cors = require("cors");

const express=require("express");
const itemRoute = require("./routes/item");
const historyRoute = require("./routes/history");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/LostAndFoundDB");
const app = express();
bodyParser = require('body-parser');

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);


app.use("/items", itemRoute);
app.use('/history',historyRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
