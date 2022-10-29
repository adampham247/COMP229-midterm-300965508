/*
Author's name: Thien Ngoc Duy Pham
StudentID: 300965508
Web App: COMP229-Midterm-300965508
*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let employee = require("../models/employees");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    employees: "",
  });
});

module.exports = router;
