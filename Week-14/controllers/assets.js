const AssetModel = require("./../models/assets")
var nodemailer = require('nodemailer');

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

// Search Asset
exports.searchAsset = async (req, res) => {
    const month = req.query.month
    const year = req.query.year
    const Asset = await AssetModel.find()
    let filterAssests
    if (month && !year) {
     filterAssests = Asset.filter(asset => new Date(asset.created_at).getMonth() == month-1);
    } else if(year && !month) {
      filterAssests = Asset.filter(asset => new Date(asset.created_at).getFullYear() == year);
    } else if(month && year) {
      filterAssests = Asset.filter(asset => new Date(asset.created_at).getFullYear() == year && new Date(asset.created_at).getMonth() == month-1) ;
    }
    res.send(filterAssests)
}