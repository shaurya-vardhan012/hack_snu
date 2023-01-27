const express = require("express");
const router = express.Router();
const User = require("../models/user");



router.get("/register1",async(req,res)=>{
    res.send("hello");
    // console.log("hello");
});


router.post("/register",async(req,res)=>{
   const newUser = new User(req.body); 

    try{
      const duplicate = await User.find({username: newUser.username}) 
      if(duplicate){
        
      } 
      await newUser.save();
      res.status(200).json("successfully registered");
    }catch(error){
        console.log(error);
    }
});


router.post("/login",(req,res)=>{
    
})

module.exports = router;