var express = require("express");
var router = express.Router();
const {User} = require("../models");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/user", function(req, res) {
  User.findAll().then(user => {
    res.send(user);
  });
});

router.post("/user", function(req, res) {
  const { username, password, email } = req.body;
  const data = {
    firstName: username,
    lastName: password,
    email: email
  }
  User.create(data)
  res.send(data);
});

module.exports = router;
