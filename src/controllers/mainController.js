const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel')
const userModel = require('../models/userModel1')

const newUser = async function(req,res){
    let user = req.body
    let newData = await userModel.create(user)
    res.send(newData)
}
const newProduct = async function(req,res){
    let data = req.body
    let newData = await productModel.create(data)
    res.send(newData)
}
const newOrder = async function(req,res){
    let data = req.body
    let newData = await orderModel.create(data)
    res.send(newData)
}

module.exports.newUser=newUser
module.exports.newProduct = newProduct
module.exports.newOrder = newOrder