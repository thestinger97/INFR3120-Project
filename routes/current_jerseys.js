var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const db = mysql.createConnection({
  host : "infr3810.czewdya70obt.us-east-2.rds.amazonaws.com",
  port : "3306",
  user : "admin",
  password: "messi3647",
  database: "INFR3810_db"
  ,
  });




router.get('/', function(req, res, next) {
  var query = "SELECT * FROM Jerseys ORDER BY id ASC"
db.query(query, function(error, data){
if (error){
  throw error;
}
else {
  res.render('current_jerseys', {title: "Available Current Jerseys", action:'list', sampleData:data})
}



})
});



module.exports = router;
