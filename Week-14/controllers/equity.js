const EquityModel = require("./../models/equity")

// Add Equity
exports.addEquity = async (req, res) => {
    const equity_name = req.body.equity_name
    EquityModel.findOne({ equity_name: equity_name }, async (err, equity) => {
        if (equity) {
            res.send("Equity already exists with the same name")
        } else {
            try {
                const newEquity = new EquityModel(req.body);
                res.status(201).json(await newEquity.save())
            } catch (err) {
                res.status(500).json({ error: err })
                res.send("Successfully Added")
            }
        }
    })
}