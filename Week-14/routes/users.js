const express = require("express")
const router = express.Router()

//Register
router.post("/register",require("../controllers/users").registerUser);

//Login
router.post("/login",require("../controllers/users").loginUser);

module.exports = router