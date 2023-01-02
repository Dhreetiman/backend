const publisherModel = require('../models/publisherModel')

const newPublisher = async function(req,res){
    let data = req.body
    let allPublisher = await publisherModel.create(data)
    res.send({msg:allPublisher})
}

module.exports.newPublisher = newPublisher