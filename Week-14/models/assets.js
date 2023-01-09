const mongoose = require("mongoose")

//create a asset schema
const assetSchema = new mongoose.Schema({
    asset_name:{
        type:String,
        required:true
    },
    asset_amount:{
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

module.exports = mongoose.model("assets", assetSchema)