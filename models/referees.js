const mongoose=require('mongoose');

const refereeSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    firstName:
    {
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    referralCode:
    {
        type:String,
        required:true
    },
    referedBy:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Employee"
    }
    
    
 
},{
    timestamps:true
});


const Referee=mongoose.model("Referee",refereeSchema);
module.exports=Referee;