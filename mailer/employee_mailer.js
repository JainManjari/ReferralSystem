const nodemailer=require('../config/nodemailer');

exports.signUp=(user)=>{

   // console.log("employee mailer signup "+user.email+" "+process.env.GROFERS_GMAIL_USERNAME);

    let htmlString=nodemailer.renderTemplate({user:user},"/employees/signup_email.ejs");

    nodemailer.transporter.sendMail({
        from:process.env.GROFERS_GMAIL_USERNAME,
        to:user.email,
        subject:"Congratulations, Welcome to the Family!",
        html:htmlString
    },(err,info)=>{
        if(err)
        {
            console.log("Error in sending mail for new signup ",err);
            return;
        }
       // console.log("Email sent: ",info);
        return;
    })
}



exports.refereeSignUp=(user)=>{

    // console.log("employee mailer signup "+user.email+" "+process.env.GROFERS_GMAIL_USERNAME);
 
     let htmlString=nodemailer.renderTemplate({user:user},"/employees/referee_signup_email.ejs");
 
     nodemailer.transporter.sendMail({
         from:process.env.GROFERS_GMAIL_USERNAME,
         to:user.refer.email,
         subject:`${user.referee.firstName} has been successfully registered through ${user.referee.referralCode}!`,
         html:htmlString
     },(err,info)=>{
         if(err)
         {
             console.log("Error in sending mail for new signup ",err);
             return;
         }
        // console.log("Email sent: ",info);
         return;
     })
 }



 exports.refereeRemove=(user)=>{

    // console.log("employee mailer signup "+user.email+" "+process.env.GROFERS_GMAIL_USERNAME);
 
     let htmlString=nodemailer.renderTemplate({user:user},"/employees/referee_remove_email.ejs");
 
     nodemailer.transporter.sendMail({
         from:process.env.GROFERS_GMAIL_USERNAME,
         to:user.refer.email,
         subject:`Your referee ${user.referee.firstName} has removed their account!`,
         html:htmlString
     },(err,info)=>{
         if(err)
         {
             console.log("Error in sending mail for new signup ",err);
             return;
         }
        // console.log("Email sent: ",info);
         return;
     })
 }




exports.updateReferralCode=(user)=>{

    // console.log("employee mailer signup "+user.email+" "+process.env.GROFERS_GMAIL_USERNAME);
 
     let htmlString=nodemailer.renderTemplate({user:user},"/employees/update_referral_email.ejs");
 
     nodemailer.transporter.sendMail({
         from:process.env.GROFERS_GMAIL_USERNAME,
         to:user.employee.email,
         subject:"Your Referral Code has been updated!",
         html:htmlString
     },(err,info)=>{
         if(err)
         {
             console.log("Error in sending mail for update referral code ",err);
             return;
         }
        // console.log("Email sent: ",info);
         return;
     })
 }