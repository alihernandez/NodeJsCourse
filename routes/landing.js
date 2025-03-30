const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

const usernames = [];

router.get("/", (req, res, next) => {
    console.log("Landing Page");

    res.render("landing", {
        docTitle: "Home",
        path: "/"
    });
});

router.post("/", (req, res, next) => {
    usernames.push({ title: req.body.username });
    console.log("POST")
    console.log(req.body);
    res.redirect("/");
    console.log("names:", usernames);
  });

exports.routes = router;
exports.usernames = usernames;