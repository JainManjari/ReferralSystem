const queue=require('../config/kue');
const employeeMailer=require('../mailer/employee_mailer');

queue.process("successfulRegistration",function(job,done)
{
    employeeMailer.signUp(job.data);
    done();
});


queue.process("refereeRegistered",function(job,done)
{
    employeeMailer.refereeSignUp(job.data);
    done();
});


queue.process("updateReferralCode",function(job,done)
{
    employeeMailer.updateReferralCode(job.data);
    done();
});
