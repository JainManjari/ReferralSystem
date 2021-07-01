const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost/referral_db");

const URL = `mongodb+srv://Manjari:raghav98@cluster0.ljcc2.mongodb.net/referral_system?retryWrites=true&w=majority`

mongoose.connect(URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
});


const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error in connecting with DB"));

db.once("open",function(){
    console.log("Successfully connected to DB");
})
