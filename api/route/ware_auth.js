const express = require("express");
const warehouse = require("../models/warehouse");
const router = express.Router();

router.post("/details",async(req,res)=>{
    const newwarehouse = new warehouse(req.body);
    try{
       await newwarehouse.save();
    }catch(error){
       console.log(error);
    }
})

router.post("/all",async(req,res)=>{
     try{
        const data = await warehouse.find({manu_id: req.body.manu_id});
        res.status(200).json(data);
     }catch(error){
        console.log(error);
     }
})

module.exports = router;