const express = require("express");
const cors = require("cors");
const User = require("./database/userSchema");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//routes

app.get("/", (req, res) => res.send("this is my app"));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      console.log(user);
      if (user.password === password) {
        res.send({
          status: "success",
          message: "User found . Login Successful",
          user: {
            name: user.name,
            email: user.email,
            role: user.role,
          },
        });
      } else {
        res.send({
          status: "failure",
          message: "Password didnot match",
        });
      }
    } else {
      res.send({
        status: "failure",
        message: "User not registered",
      });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({
        status: "failure",
        message: "Email is already registered",
      });
    } else {
      const user = new User({
        name,
        email,
        password,
        role: "user",
      });

      user.save((err) => {
        if (err) {
          console.log("hello");
          console.log(err);
          res.send({
            status: "failure",
            message: err.message,
          });
        } else {
          res.send({
            status: "success",
            message: "User registered succesfully",
            user: {
              name: user.name,
              role: user.role,
              email: user.email,
            },
          });
        }
      });
    }
  });
});

module.exports = app;
