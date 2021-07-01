const express=require('express');
const router=express.Router();
const employeeController=require("../controller/employee_controller");

router.get("/sign-up",employeeController.signUpEmployee);
router.post("/sign-up",employeeController.createEmployee);

module.exports=router;