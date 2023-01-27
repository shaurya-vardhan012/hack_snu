const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./route/auth");
const auth_manu = require("./route/m_auth");
const auth_dis = require("./route/d_auth");
const cors= require('cors');

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

// app.get("/",(req,res) => {
    //     res.send("hello");
    // })
    
    app.use(express.json());
    

mongoose.connect("mongodb+srv://Tanishk:sL7Jiha3FCLmwh7@cluster0.gehhe.mongodb.net/hacksnu?retryWrites=true&w=majority",{useUnifiedTopology:true}).then(console.log("Connected successfully")).catch((err)=>{console.log(err)});




app.use("/auth",authRoute);
app.use("/manu_auth",auth_manu);
app.use("/dis_auth",auth_dis);

app.listen("5000",()=>{
    console.log("Success");
})