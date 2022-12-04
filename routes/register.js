var express = require('express');
const passport = require('passport');
var router = express.Router();
let userModel = require("../models/users");
let User = userModel.User;

router.get("/", function(req, res, next) {
    if (!req.user){
    res.render("register", { 
      title: "Register",
      //message: req.flash("loginMessage "),
      displayName: req.user ? req.user.displayName: " "
     })
     }
    else {
    
      return res.redirect("/")
    }
    })
    
    router.post("/", function (req,res, next) {
        let newUser = new User({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        displayName : req.body.displayName
        
        })
        User.register(newUser, req.body.password, (err) => {
        if (err){
        
          console.log("Error: Insterting the new user");
        
        if (err.name == "UserExistsError"){
        
          req.flash("registerMessage",
          "Registration Error: User Already Exists");
        }
        return res.render("register", 
        {
        title: "Register",
        message: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName: " "
        
        
        
        });
        }
        else{
        return passport.authenticate("local")(req, res, () =>
        {
          res.redirect("/");
        })
        }})
        })







    module.exports = router;