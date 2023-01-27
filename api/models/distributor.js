const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    dis_id:{
        type: String,
        required: true,
        unique: true
    },
    dis_name:{
        type: String
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("distributor",userschema);