const Employee=require('../models/employee');

module.exports.signUpEmployee=function(req,res)
{
    return res.render("home",{"title":"Referral Home | Employee SignUp"});
}

module.exports.createEmployee=async function(req,res)
{
    try
    {
        
        let employee=await Employee.findOne({email:req.body.email});
        let length=await Employee.count();
        if(employee)
        {
            return res.redirect("back");
        }
        else if(req.body.password!=req.body.confirmPwd)
        {
            return res.redirect("back");
        }
        else
        {
            let referral=req.body.name.substring(0,3).toUpperCase()+""+(length+1)*10;
            console.log(referral);
            let newEmployee={
                name:req.body.name,
                password:req.body.password,
                email:req.body.email,
                referral:referral
            }
            newEmployee=await Employee.create(newEmployee);
            console.log(newEmployee);
            return res.redirect("back");

        }
        

    }
    catch(err)
    {
        console.log("Error in creating new employee "+err);
        return;
    }
}