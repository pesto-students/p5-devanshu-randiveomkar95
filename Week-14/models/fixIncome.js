const mongoose = require("mongoose")

//create a asset schema
const fixIncomeSchema = new mongoose.Schema({
    income_name:{
        type:String,
        required:true
    },
    income_amount:{
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

module.exports = mongoose.model("fixIncome", fixIncomeSchema)