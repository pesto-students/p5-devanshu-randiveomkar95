const FixedIncomeModel = require("./../models/fixIncome")

// Add Fixed Income
exports.addFixIncome = async (req, res) => {
    const income_name = req.body.income_name
    FixedIncomeModel.findOne({ income_name: income_name }, async (err, income) => {
        if (income) {
            res.send("Income already exists with the same name")
        } else {
            try {
                const newFixIncome = new FixedIncomeModel(req.body);
                res.status(201).json(await newFixIncome.save())
            } catch (err) {
                res.status(500).json({ error: err })
                res.send("Successfully Added")
            }
        }
    })
}