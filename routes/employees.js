const express=require('express');
const passport=require('passport');
const router=express.Router();
const employeeController=require("../controller/employee_controller");

router.get("/sign-up",employeeController.signUpEmployee);
router.post("/sign-up",employeeController.createEmployee);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/'},
), employeeController.createSession);

router.get("/sign-out",employeeController.destroySession);
router.get("/delete-account",employeeController.deleteAccount);

router.get("/edit-code",passport.checkAuthentication,employeeController.editCodePage);
router.post("/edit-code",passport.checkAuthentication,employeeController.editCode);

module.exports=router;