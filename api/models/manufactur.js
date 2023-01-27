const mongoose = require("mongoose");

const manuschema = new mongoose.Schema({
    manu_id:{
        type: String,
        required: true,
        unique: true
    },
    manu_name:{
        type: String
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("manufactur",manuschema);