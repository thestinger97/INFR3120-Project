var express = require('express');
const passport = require('passport');
var router = express.Router();
let userModel = require("../models/users");
let User = userModel.User;

router.get("/", function(req, res, next) {
req.logout(function(err){
if(err){
    return next(err);
}

})

res.redirect("/");

})

module.exports = router;