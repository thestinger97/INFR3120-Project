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
       
     res.render("login")
}
);

router.post('/', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM Users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/');
			} else {
				response.send('Incorrect Username or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Incorrect Username or Password!');
		response.end();
	}
});


    module.exports = router;