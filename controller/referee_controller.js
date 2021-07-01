const Employee=require('../models/employees');

module.exports.signUpJob=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect("back");
    }
    return res.render("home",{"title":"Referral Home | Job Seeker SignUp"});
}


module.exports.createReferee=async function(req,res)
{
    try
    {
        
        let referee=await Employee.findOne({email:req.body.email});
        let length=await Employee.count();
        if(referee)
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
            let referral=req.body.referralCode.toUpperCase();
            console.log(referral);

            let refer=await Employee.findOne({referralCode:referral});

            console.log("refer "+refer);

            let newReferee={
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                password:req.body.password,
                email:req.body.email,
                referralCode:referral,
                isEmployee:false,
                referedBy:refer._id
            }
            newReferee=await Employee.create(newReferee);
            console.log(newReferee);

            refer.referees.push(newReferee);
            refer.save();

            console.log("refer 2 "+refer);

            req.flash("success", "Sign Up Done Right!");
            return res.redirect("back");

        }
        

    }
    catch(err)
    {
        console.log("Error in creating new referee "+err);
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