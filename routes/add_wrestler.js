var express = require('express');
let Wrestlers = require("../models/wrestlers");
var router = express.Router();

function requireAuth(req, res, next)
{
  if(!req.isAuthenticated())
  {
  return res.redirect("/login");
  }
next();

}



router.get('/', requireAuth, function(req, res, next) {
  res.render("add_wrestler.ejs", {title: "", displayName: req.user ? req.user.displayName: ""});
  
});

router.post('/', requireAuth, (req, res, next) => {
  let newwrestler = Wrestlers ({
    
    "wrestler_name" : req.body.wrestler_name,
    "world_championships" : req.body.world_championships,
    "companies" : req.body.companies,
    "years_active": req.body.years_active

  })

Wrestlers.create(newwrestler, (err, Wrestlers) =>{

if (err){

  console.log(err);
  res.end(err);
}
else {
res.redirect("/")
}


})

})

module.exports = router;
