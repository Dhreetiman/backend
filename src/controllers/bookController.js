const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let aId = req.body.authorId
    let pId = req.body.publisherId
    // console.log(aId)
    if (!aId) return res.send("Error: AuthorId is Mandatory")
    if (!pId) return res.send("Error: PublisherId is Mandatory")
    let authorData=await authorModel.findById({_id:aId})
    if(!authorData) res.send("author is not avalable")
    let publisherData=await publisherModel.findById({_id:pId})
    if(!publisherData) return res.send("Publisher not avalable")

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('authorId').populate('publisherId')
    res.send({data: specificBook})

}

const findSpecificBook = async function(req,res){
    let pId = await publisherModel.find({name:"Penguin"}).select({_id:1})
    let hId = await publisherModel.find({name: "HarperCollins"}).select({_id:1})
    let specificBook1 = await bookModel.updateMany({publisherId:pId}, {$set:{isHardCopy:true}},{new:true})
    res.send(specificBook1)
    let specificBook2 = await bookModel.updateMany({publisherId:hId}, {$set:{isHardCopy:true}},{new:true})
    res.send(specificBook2)

}

const priceUpdate = async function(req,res){
    let author = await authorModel.find({rating:3.5}).select({_id:1})
    let updated = await bookModel.updateMany({authorId:author}, {$inc: {price: 10}},{new:true})
    return res.send({msg:updated})
    
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.findSpecificBook = findSpecificBook
module.exports.priceUpdate = priceUpdate
