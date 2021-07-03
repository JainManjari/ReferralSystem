const nodemailer=require('../config/nodemailer');


exports.signUp=(user)=>{

    // console.log("employee mailer signup "+user.email+" "+process.env.GROFERS_GMAIL_USERNAME);
 
     let htmlString=nodemailer.renderTemplate({user:user},"/referees/signup_email.ejs");
 
     nodemailer.transporter.sendMail({
         from:process.env.GROFERS_GMAIL_USERNAME,
         to:user.referee.email,
         subject:`You have been successfully referred by ${user.refer.firstName}`,
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
 
     let htmlString=nodemailer.renderTemplate({user:user},"/referees/update_referral_email.ejs");
 
     nodemailer.transporter.sendMail({
         from:process.env.GROFERS_GMAIL_USERNAME,
         to:user.employee.email,
         subject:"Your Referred Code has been updated!",
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