const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Orji5644@",
  database: "socialmedia",
});

module.exports = db;