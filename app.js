import express from "express";
const app = express();
import userRouter from "./routes/users.js";

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

//required for req.body to be accessible to for any routes
app.use(express.urlencoded({ extended: true }));

// const userRouter = require("./routes/users.js");
app.use("/users", userRouter);

app.listen(3000);
