var express = require('express');
var router = express.Router();
let Wrestlers = require("../models/wrestlers")

router.get('/', function(req, res, next) {
  res.render("add_wrestler.ejs");
});

router.post('/', (req, res, next) => {
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
