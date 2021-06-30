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
    name:
    {
        type:String,
        required:true
    },
    referral:
    {
        type:String,
        required:true
    },
    
 
},{
    timestamps:true
});


const Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee;