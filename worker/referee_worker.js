const queue=require('../config/kue');
const refereeMailer=require('../mailer/referee_mailer');

queue.process("successfulRegistrationR",function(job,done)
{
    refereeMailer.signUp(job.data);
    done();
});


queue.process("updateReferralCodeR",function(job,done)
{
    refereeMailer.updateReferralCode(job.data);
    done();
});
