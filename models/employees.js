const mongoose=require('mongoose');

const employeeSchema=new mongoose.Schema({
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
    referees:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Referee"
        }
    ]
    
 
},{
    timestamps:true
});


const Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee;