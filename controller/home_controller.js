let Employee=require('../models/employees');

module.exports.home=async function(req,res)
{
    try
    {
        if(req.user)
        {
            let user=await Employee.findById(req.user._id).populate({
                path:"referees",
                options:{
                    sort:"-createdAt"
                }
            });
            if(!user.isEmployee)
            {
                return res.render("home",{"title":"Referral Home"});
            }
            else
            {
                return res.render("home",{
                    "title":"Referral Home",
                    "referees":user.referees,
                    "totalReward":user.referees.length*100
                });
            }
        }
        return res.render("home",{"title":"Referral Home"});
        
    }
    catch(err)
    {
        console.log("Error in loading home page "+err);
        return;
    }
}
