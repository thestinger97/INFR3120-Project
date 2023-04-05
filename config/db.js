var express = require('express');
const mysql = require("mysql");
const db = mysql.createConnection({
host : "infr3810.czewdya70obt.us-east-2.rds.amazonaws.com",
port : "3306",
user : "admin",
password: "messi3647",
database: "INFR3810_db"
,
});

//connect to db

db.connect((err) =>{
if (err){
  console.log(err.message);
  return;
}
console.log("Database Connected hehehe ")

});