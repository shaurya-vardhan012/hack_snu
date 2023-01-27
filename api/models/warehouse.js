const mongoose = require("mongoose");

const wareschema = new mongoose.Schema({
    ware_id:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String
    },
    capacity:{
        type: String,
        required: true
    },
    manu_id:{
        type: String,
    }
});

module.exports = mongoose.model("warehouse",manuschema);