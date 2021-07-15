const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost/referral_db");

const URL = `${process.env.REFERRAL_MONGODB_URL}`;

mongoose.connect(URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
});


const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting with DB"));

db.once("open",function(){
    console.log("Successfully connected to DB");
})
