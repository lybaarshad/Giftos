const Product = require('../../models/productModel');

exports.createProduct = async (req, res) => {
        let data = new Product(req.body);
        let result = await data.save();
        res.send(result);
    
}

exports.Display = async (req, res) => {
    let data = await Product.find();
    res.send(data);
}

exports.purchaseProduct = async (req, res) => {
    let data = await Product.findOne({_id:req.params.id});
    res.send(data);
}

