/* get router for delete operation */


var express = require('express');
var router = express.Router();
let Wrestlers = require("../models/wrestlers");

function requireAuth(req, res, next)
{
  if(!req.isAuthenticated())
  {
  return res.redirect("/login");
  }
next();

}



router.get('/id/:id', requireAuth, function(req, res, next) {
 let id = req.params.id;
 Wrestlers.deleteOne({_id: id}, (err) => {
  if(err)
  {

     console.log(err);
     res.end(err);


  } 

  else{
    res.redirect("/");

   
 
  }


 })



});

module.exports = router;