const express = require("express")
const router = express.Router()

//Add Fixed Income
router.post("/add",require("../controllers/fixIncome").addFixIncome);

module.exports = router