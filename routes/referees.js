const express=require('express');
const passport=require('passport');
const router=express.Router();
const refereeController=require("../controller/referee_controller");

router.get("/sign-up",refereeController.signUpJob);
router.post("/sign-up",refereeController.createReferee);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/'},
), refereeController.createSession);

router.get("/sign-out",refereeController.destroySession);

module.exports=router;