var express = require('express');
const passport = require('passport');
var router = express.Router();
let userModel = require("../models/users");
let User = userModel.User;


router.get("/", function(req, res, next) {
    if (!req.user){
   
     res.render("login",{
     title: "Login",
     displayName: req.user ? req.user.displayName: " "
     }
     )
    }

   else {
     return res.redirect("/")
   }
   
   }
   )

   router.post("/", function(req, res, next)  {
    passport.authenticate('local',(err,user, info)=>
    {
        // server error
        if(err)
        {
            return next(err);
        }
        // is a login error
        if(!user)
        {
            req.flash('loginMessage',
            'AuthenticationError');
            return res.redirect('login');
        }
        req.login(user,(err) => {
            if(err)
            {
                return next(err)
            
              } 

    return res.redirect("/");
   
  })
     }) (req, res, next)
  
    
    })

    module.exports = router;