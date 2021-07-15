const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/referral_db");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting with DB"));

db.once("open",function(){
    console.log("Successfully connected to DB");
})
