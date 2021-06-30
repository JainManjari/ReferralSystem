const express=require('express');
const router=express.Router();
const employeeController=require("../controller/employee_controller");
const jobSeekerController=require("../controller/job_seeker_controller");

router.get("/employee",employeeController.signUpEmployee);

router.get("/job-seeker",jobSeekerController.signUpJob);

module.exports=router;