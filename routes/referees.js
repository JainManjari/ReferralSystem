const express=require('express');
const router=express.Router();
const refereeController=require("../controller/referee_controller");

router.get("/sign-up",refereeController.signUpJob);
router.post("/sign-up",refereeController.createReferee);

module.exports=router;