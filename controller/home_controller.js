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
            }).populate("referedBy");
            if(!user.isEmployee)
            {
                let referedBy={
                    firstName:user.referedBy.firstName,
                    lastName:user.referedBy.lastName,
                    email:user.referedBy.email
                };

                return res.render("home",{"title":"Grofers","referedBy":referedBy});
            }
            else
            {
                return res.render("home",{
                    "title":"Grofers",
                    "referees":user.referees,
                    "totalReward":user.referees.length*100
                });
            }
        }
        return res.render("home",{"title":"Grofers"});
        
    }
    catch(err)
    {
        console.log("Error in loading home page "+err);
        return;
    }
}
