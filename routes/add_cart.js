
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


router.get('/', (req, res, next) => {
res.render('add_cart')

  


});

router.post('/', (request, response, next) =>{
    var team_name = request.body.team_name;
	var size = request.body.size;
    var colors = request.body.colors

	

	var query = `
	INSERT INTO Cart
	(id, team, size, color) 
	VALUES (default, "${team_name}", "${size}", "${colors}")
	`;

	db.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			response.redirect("/shopping_cart");
		}

	});
    

})

module.exports = router;
