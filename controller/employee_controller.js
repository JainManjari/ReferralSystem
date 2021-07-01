const Employee=require('../models/employees');


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
            let referral=req.body.firstName.substring(0,3).toUpperCase()+""+(length+1)*10+req.body.lastName.substring(0,3).toUpperCase();
            console.log(referral);
            let newEmployee={
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                password:req.body.password,
                email:req.body.email,
                referralCode:referral,
                isEmployee:true
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


module.exports.createSession = function (req, res) 
{
 //   req.flash("success", "Ascented Chivalrously!");
    return res.redirect('/');
}

module.exports.destroySession = function (req, res) {
    req.logout();
   // req.flash("success", "Descented Reminiscently!");
    return res.redirect("/");
}

