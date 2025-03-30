const express = require("express");
const userData = require("./landing");

const router = express.Router();

router.get("/users", (req, res, next) => {
    console.log("Users Page");
    const usernames = userData.usernames;
    console.log(userData.usernames);
    console.log(usernames);

    res.render("users", {
        names: usernames,
        docTitle: "Users",
        path: "/users",
        hasUsers: usernames.length > 0
    });
});


module.exports = router;
