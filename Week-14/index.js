const express = require("express");
const app = express()
const port = process.env.PORT || 5000;

const conn = require("./db")
const cors = require("cors")

app.use(cors())
app.use(express.json())

// connect mongodb
conn.connection.on("connected", (err) => {  
    if (err) {
        console.error(err)
    } else {
        console.log("Connected to Mongo Db")
    }
})

//Default Index Page
app.get("/", (req, res) => {
    res.send(`<h1>Wealth Portfolio App</h1>`)
})

//User Routes
app.use("/user",require("./routes/users"))

//Asset Routes
app.use("/asset",require("./routes/assets"))

//Equity Routes
app.use("/equity",require("./routes/equity"))

//FixIncome Routes
app.use("/fixIncome",require("./routes/fixIncome"))

//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})