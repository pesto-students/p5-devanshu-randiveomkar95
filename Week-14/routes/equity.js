const express = require("express")
const router = express.Router()

//Add Equity
router.post("/add",require("../controllers/equity").addEquity);

module.exports = router