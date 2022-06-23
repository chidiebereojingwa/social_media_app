const express = require("express");
const app = express();

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Orji5644@",
  database: "socialmedia",
});

const userRoute = require("./routes/User");
app.use("/user", userRoute);
app.listen(3001, (req, res) => {
  console.log("Server running...");
});
