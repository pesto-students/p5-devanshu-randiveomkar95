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

// Search Equity
exports.searchEquity = async (req, res) => {
    const month = req.query.month
    const year = req.query.year
    const Equity = await EquityModel.find()
    let filter
    if (month && !year) {
     filter = Equity.filter(equity => new Date(equity.created_at).getMonth() == month-1);
    } else if(year && !month) {
      filter = Equity.filter(equity => new Date(equity.created_at).getFullYear() == year);
    } else if(month && year) {
      filter = Equity.filter(equity => new Date(equity.created_at).getFullYear() == year && new Date(equity.created_at).getMonth() == month-1) ;
    }
    res.send(filter)
}