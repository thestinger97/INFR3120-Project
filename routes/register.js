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


router.get("/", function(req, res, next) {
  res.render("register", {title:'Insert Data into MySQL', action:'add'});

    })



    
router.post("/", function(request, response, next){

	var username = request.body.username;

	var password = request.body.password;

	

	var query = `
	INSERT INTO Users
	(id, username, password) 
	VALUES (3, "${username}", "${password}")
	`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			response.redirect("/");
		}

	});

});






    module.exports = router;