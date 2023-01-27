const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    con_id:{
        type: String,
        required: true,
        unique: true
    },
    con_name:{
        type: String
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("manufactur",userschema);