const express = require("express")
const router = express.Router()

//Add Fixed Income
router.post("/add",require("../controllers/fixIncome").addFixIncome);

//Search Fixed Income
router.post("/search", require("../controllers/fixIncome").searchFixIncome);


module.exports = router