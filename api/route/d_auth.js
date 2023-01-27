const express = require("express");
const router = express.Router();
const Distributor = require("../models/distributor");



router.post("/register",async(req,res)=>{
   const newDistributor = new Distributor(req.body); 

    try{
      await newDistributor.save();
      res.status(200).json("successfully registered");
    }catch(error){
        console.log(error);
    }
});

router.post("/login",async(req,res)=>{
    // console.log(req.body);
    try{
        const dis = await Distributor.findOne({dis_id: req.body.dis_id});
        !dis && res.status(400).json("user not found");
        
        const validate = dis.password === req.body.password ? true : false;
        if(validate){
            res.status(200).json("correct password");
        }
        else{
            res.status(400).json("wrong password");
        }

    }catch(error){
        console.log(error);
    }
});


module.exports = router;