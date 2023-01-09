const express = require("express")
const router = express.Router()

//Add Equity
router.post("/add",require("../controllers/equity").addEquity);

//Search Equity
router.post("/search", require("../controllers/equity").searchEquity);

module.exports = router