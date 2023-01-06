const express = require("express")
const router = express.Router()

//Add Asset
router.post("/add",require("../controllers/assets").addAsset);

module.exports = router