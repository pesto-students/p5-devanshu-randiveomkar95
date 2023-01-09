const mongoose = require("mongoose")

//create a equity schema
const equitySchema = new mongoose.Schema({
    equity_name:{
        type:String,
        required:true
    },
    equity_amount:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    updated_at:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("equity", equitySchema)