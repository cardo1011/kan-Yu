import express from "express";
import { nanoid } from "nanoid";
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("newUserForm.ejs");
});

router.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const userId = nanoid();
  console.log(req.body);
  console.log(`UUID: ${userId}`);
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

export default router;
