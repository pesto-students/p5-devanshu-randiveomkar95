const express = require("express")
const router = express.Router()

//Register User
router.post("/register",require("../controllers/users").registerUser);

//Login User
router.post("/login",require("../controllers/users").loginUser);


module.exports = router