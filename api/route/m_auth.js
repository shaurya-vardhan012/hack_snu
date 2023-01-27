const express = require("express");
const router = express.Router();
const Manufactur = require("../models/manufactur");



router.post("/register",async(req,res)=>{
   const newManufactur = new Manufactur(req.body); 
    try{
      await newManufactur.save();
      res.status(200).json("successfully registered");
    }catch(error){
        console.log("user id already taken");
    }
});

router.post("/login",async(req,res)=>{
    // console.log(req.body);
    try{
        const manu = await Manufactur.findOne({manu_id: req.body.manu_id});
        !manu && res.status(400).json("user not found");
        
        const validate = manu.password === req.body.password ? true : false;
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