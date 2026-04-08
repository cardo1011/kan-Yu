const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.get("/register", (req, res) => {
  res.render("newUserForm.ejs");
});

router.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  // const uuid = uuidv4();
  // console.log(`User's ID: ${uuid}`);

  // // write an psql query to be submitted to the table
  // const query = `
  //   INSERT INTO users (first_name, last_name, email, password, user_id)
  //   VALUE ($1, $2, $3, $4, $5)
  //   RETURNING *;
  // `;

  // console.log(query);
});

router.get("/login", (req, res) => {
  res.send("Waiting for login form to be implemented");
});

router.get("/profile", (req, res) => {
  res.send("Waiting for profile ejs file to be implemented");
  // res.render("profile.ejs");
});

module.exports = router;
