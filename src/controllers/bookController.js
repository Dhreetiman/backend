const {
    count
} = require("console")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({
        msg: savedData
    })
}

const booksList = async function (req, res) {
    let allBooks = await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({
        message: allBooks
    })
}

const getBookInYear = async function (req, res) {
    let yr = req.query.yr
    let allBooks = await BookModel.find({
        year: yr
    })
    res.send({
        message: allBooks
    })
}

const getPerticularBooks = async function (req, res) {
    let book2 = req.body
    // console.log(book2)
    let allBooks = await bookModel.find(book2)
    res.send({message: allBooks})
}

const getXINRBooks = async function (req, res) {
    
    let allBooks = await bookModel.find( {'prices.indianPrice': {$in: ["100 rs","200 rs"]}})
    res.send({
        message: allBooks
    })
}

const getRandomBook = async function(req, res){
    let allBooks = await bookModel.find({$or: [{stockAvailable: true}, {totalPage: 500}]})
    res.send({message:allBooks})
}




module.exports.createBook = createBook
module.exports.booksList = booksList
module.exports.getBookInYear = getBookInYear
module.exports.getPerticularBooks = getPerticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBook = getRandomBook