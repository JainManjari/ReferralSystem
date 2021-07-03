const Employee=require('../models/employees');


module.exports.signUpEmployee=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect("back");
    }
    return res.render("home",{"title":"Grofers | Employee SignUp"});
}

module.exports.createEmployee=async function(req,res)
{
    try
    {
        
        let employee=await Employee.findOne({email:req.body.email});
        if(employee)
        {
            req.flash("error", "This email is already in work!");
            return res.redirect("back");
        }
        else if(req.body.password!=req.body.confirmPwd)
        {
            req.flash("error", "Pwd doesn't Match!");
            return res.redirect("back");
        }
        else
        {
            let firstName=req.body.firstName;
            let lastName=req.body.lastName;
            console.log(firstName,lastName);
            referral=firstName.substring(0,3).toUpperCase();
            while(referral.length<3)
            {
                referral+=referral.charAt(0);
            }
            referral+=lastName.substring(0,3).toUpperCase();
            while(referral.length<6)
            {
                referral+=lastName.charAt(0).toUpperCase();
            }

            while(true)
            {
                referral=referral.slice(0,3)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+referral.slice(3);
                let employee=await Employee.findOne({referralCode:referral});
                if(!employee)
                {
                    break;
                }
            }

                let newEmployee={
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    password:req.body.password,
                    email:req.body.email,
                    referralCode:referral,
                    isEmployee:true
                }
                newEmployee=await Employee.create(newEmployee);
                req.flash("success", "Sign Up Done Right!");
                return res.redirect("/");

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
    req.flash("success", "Ascented Chivalrously!");
    return res.redirect('/');
}

module.exports.destroySession = function (req, res) {
    req.logout();
    req.flash("success", "Descented Reminiscently!");
    return res.redirect("/");
}




module.exports.deleteAccount= async function(req,res)
{
    try
    {
        if(!req.isAuthenticated())
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }
        if(!req.user.isEmployee)
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }
        let employee=await Employee.findByIdAndDelete(req.user.id);
        await Employee.deleteMany({referedBy:employee._id});
        req.logout();
        req.flash("success", "Erased!!");
        return res.redirect("/");

    }
    catch(err)
    {
        console.log("error in deleting employee account "+err);
        return;
    }
}


module.exports.editCodePage = async function(req,res)
{
    try
    {
        if(!req.isAuthenticated())
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }
        if(!req.user.isEmployee)
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }

        let employee=await Employee.findById(req.user.id);
        return res.render("editCode",{"title":"Grofers | Edit Code","employee":employee});
    
    }
    catch(err)
    {
        console.log("Error in fetching Edit Code Page "+err);
    }
}




module.exports.editCode = async function(req,res)
{
    try
    {
        if(!req.isAuthenticated())
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }
        if(!req.user.isEmployee)
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }

        let employee=await Employee.findById(req.user.id);
        
        let newReferral=req.body.newReferral.toUpperCase().trim().split(" ").join("");

        console.log(newReferral,newReferral.length);
        if(newReferral.length!=8)
        {
            req.flash("error","The length should be of 8!");
            return res.redirect("back");
        }
        if(employee.referralCode==newReferral)
        {
            req.flash("error","Its the same code!");
            return res.redirect("back");
        }

        let employee2=await Employee.findOne({referralCode:newReferral});

        if(employee2)
        {
            req.flash("error","This code already exists!");
            return res.redirect("back");
        }

        return res.redirect("back");
    
    }
    catch(err)
    {
        console.log("Error in Updating Code "+err);
    }
}
