const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/wealth_portfolio")
module.exports = mongoose