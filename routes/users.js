const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("newUserForm.ejs");
});

router.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body);
});

router.get("/login", (req, res) => {
  res.send("Waiting for login form to be implemented");
});

router.get("/profile", (req, res) => {
  res.send("Waiting for profile ejs file to be implemented");
  // res.render("profile.ejs");
});

module.exports = router;
