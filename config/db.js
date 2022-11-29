const mongoose = require("mongoose")
const MONGO_URI = "mongodb+srv://admin:messi3647@project.eomrtct.mongodb.net/Project"

//connect to db

const connectionParams = {

    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
 .connect(MONGO_URI, connectionParams)
 .then(() =>{
  console.info("Connected to the DB");
  
})
 .catch((e) => {
    console.log("Error:", e);
 });

