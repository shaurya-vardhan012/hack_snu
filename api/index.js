const express = require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose = require("mongoose");
const mongoose1 = require("mongoose");
const app = express();
const authRoute = require("./route/auth");
const auth_manu = require("./route/m_auth");
const auth_dis = require("./route/d_auth");
const ware_detail = require("./route/ware_auth");
const http = require('http');


const request = require('request');

request('http://localhost:3000/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

const cors= require('cors');
app.use(
    cors({
        origin: "http://localhost:3000",
    })
    )
    const Schema=mongoose.Schema;


const shipSchema = new Schema({
        id:Number,
        name:String,
        price:Number,
        quantity:Number
    });


const ship=new mongoose.model("ship",shipSchema);
id=1;
app.get("/",function(req,res){
    ship.find({id:id},function(err,foundItems){
        // console.log(foundItems);  
        
        
        const totals=[];
        foundItems.forEach(x => {
            const obj = totals.find(o => o.id === x.id && o.name === x.name);
            if (obj) {
                obj.price = obj.price + x.price;
                obj.quantity = obj.quantity + x.quantity;
            } else {
                totals.push(x);
            }
            });
            res.send(totals);
        })
})
// app.get("/",(req,res) => {
    //     res.send("hello");
    // })
    
app.use(express.json());
    

mongoose.connect("mongodb+srv://Tanishk:sL7Jiha3FCLmwh7@cluster0.gehhe.mongodb.net/hacksnu?retryWrites=true&w=majority",{useUnifiedTopology:true}).then(console.log("Connected successfully")).catch((err)=>{console.log(err)});




app.use("/auth",authRoute);
app.use("/manu_auth",auth_manu);
app.use("/dis_auth",auth_dis);
app.use("/ware_detail",ware_detail);

app.listen("5000",()=>{
    console.log("Success");
})