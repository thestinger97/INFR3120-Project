/* get router for home page and read operation */


var express = require('express');
var router = express.Router();
let Wrestlers = require("../models/wrestlers")

/* GET home page. */
router.get('/', function(req, res, next) {

Wrestlers.find((err, WrestlersList) =>{
  if (err){
      
      return console.error(err);

  }
  else {

    res.render("index", {title: "", WrestlersList: WrestlersList });
  }

});

});

module.exports = router;