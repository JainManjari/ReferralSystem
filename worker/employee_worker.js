const queue=require('../config/kue');
const employeeMailer=require('../mailer/employee_mailer');

queue.process("successfulRegistration",function(job,done)
{
    employeeMailer.signUp(job.data);
    done();
});

