/* get router for update page and operation also post router for update operation */

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


router.get('/id/:id', requireAuth, (req, res, next) => {
   let id = req.params.id;
   Wrestlers.findById(id, (err, wrestlertoedit) =>{
    if(err)
  {

     console.log(err);
     res.end(err);


  } 
  else {

         res.render("update_wrestler", {title: "Update Wrestler", wrestler:wrestlertoedit, displayName: req.user ? req.user.displayName: "" });

  }
  });
});

router.post('/id/:id', requireAuth, (req, res, next) => {
let id = req.params.id;
let UpdateWrestler = Wrestlers ({
  
  "_id": id,
  "wrestler_name" : req.body.wrestler_name,
  "world_championships" : req.body.world_championships,
  "companies" : req.body.companies,
  "years_active": req.body.years_active


})

Wrestlers.updateOne({_id: id}, UpdateWrestler, (err) => {
  if(err)
  {

     console.log(err);
     res.end(err);


  } 

  else{

    res.redirect("/")

  }

});

});


module.exports = router;
