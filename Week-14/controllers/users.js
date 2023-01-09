const UserModel = require("./../models/users")

// User Registration
exports.registerUser = async (req, res) => {
    const email = req.body.email
    UserModel.findOne({ email: email }, async (err, user) => {
        if (user) {
            res.send("User already registered with same email address")
        } else {
            try {
                const newUser = new UserModel(req.body);
                res.status(201).json(await newUser.save())
            } catch (err) {
                res.status(500).json({ error: err })
                res.send("Successfully Registered")
            }
        }
    })
}

// User Login
exports.loginUser = (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password
        UserModel.findOne({ email: email }, (err, user) => {
            if (user) {
                if (password === user.password) {
                    res.send({ message: "Login SuccessFull", user: user })
                } else {
                    res.send({ message: "Password didn't Match" })
                }
            } else {
                res.send({ message: "User Not Registered Please Register" })
            }
        })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}