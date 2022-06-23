const express = require('express')
const router = express.Router()


router.get("/register", (req, res) => {
  db.query(
    "INSERT INTO Users(username, password) VALUES ('chidi', 'password');",
    (err, results) => {
      res.send(results);
    }
  );
});

module.exports = router