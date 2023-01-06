const AssetModel = require("./../models/assets")

// Add Asset
exports.addAsset = async (req, res) => {
    const asset_name = req.body.asset_name
    AssetModel.findOne({ asset_name: asset_name }, async (err, asset) => {
        if (asset) {
            res.send("Asset already exists with the same name")
        } else {
            try {
                const newAsset = new AssetModel(req.body);
                res.status(201).json(await newAsset.save())
            } catch (err) {
                res.status(500).json({ error: err })
                res.send("Successfully Added")
            }
        }
    })
}