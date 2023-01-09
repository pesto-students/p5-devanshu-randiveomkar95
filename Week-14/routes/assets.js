const express = require("express")
const router = express.Router()

//Add Asset
router.post("/add", require("../controllers/assets").addAsset);

//Search Asset
router.post("/search", require("../controllers/assets").searchAsset);


module.exports = router