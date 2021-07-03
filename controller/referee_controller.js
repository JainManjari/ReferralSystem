const Employee=require('../models/employees');
const queue=require('../config/kue');
const employeeEmailWorker=require('../worker/employee_worker');
const refereeEmailWorker=require('../worker/referee_worker');


module.exports.signUpJob=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect("back");
    }
    return res.render("home",{"title":"Grofers | Referee SignUp"});
}


module.exports.createReferee=async function(req,res)
{
    try
    {
        
        let referee=await Employee.findOne({email:req.body.email});
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
            let referral=req.body.referralCode.toUpperCase().trim().split(" ").join("");;

            let refer=await Employee.findOne({referralCode:referral});
            if(!refer)
            {
                req.flash("error", "Referral Code doesn't Match!");
                return res.redirect("back");
            }


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

            refer.referees.push(newReferee);
            refer.save();

            let newData={
                referee:newReferee,
                refer:refer
            }

            let job=queue.create("successfulRegistrationR",newData).save(function(err)
            {
                    if(err)
                    {
                        console.log("error in creating a queue ",err);
                        return;
                    }
                    console.log("employee job enqueued " ,job.id);
     
            });

            let job2=queue.create("refereeRegistered",newData).save(function(err)
            {
                    if(err)
                    {
                        console.log("error in creating a queue ",err);
                        return;
                    }
                    console.log("employee job enqueued " ,job2.id);
     
            });

            req.flash("success", "Sign Up Done Right!");
            return res.redirect("/");

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




module.exports.deleteAccount= async function(req,res)
{
    try
    {
        if(!req.isAuthenticated())
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }
        if(req.user.isEmployee)
        {
            req.flash("error","You don't have the access!");
            return res.redirect("back");
        }
        let referee=await Employee.findByIdAndDelete(req.user.id);
        let refer =await Employee.findById(referee.referedBy);

        refer.referees.pull(referee);
        refer.save();

        let newData={
            referee:referee,
            refer:refer
        }

        
        let job=queue.create("refereeRemoved",newData).save(function(err)
        {
                if(err)
                {
                    console.log("error in creating a queue ",err);
                    return;
                }
                console.log("employee job enqueued " ,job.id);
 
        });


        let job2=queue.create("successfulRemoval",referee).save(function(err)
        {
                if(err)
                {
                    console.log("error in creating a queue ",err);
                    return;
                }
                console.log("employee job enqueued " ,job2.id);
 
        });

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