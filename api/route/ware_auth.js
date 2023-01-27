const express = require("express");
const warehouse = require("../models/warehouse");
const router = express.Router();
const Warehouse = require("../models/warehouse");

router.post("/details",async(req,res)=>{
    const newwarehouse = new warehouse(req.body);
    try{
       await newwarehouse.save();
    }catch(error){
       console.log(error);
    }
})

module.exports = router;