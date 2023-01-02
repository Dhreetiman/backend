const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    authorName: String,
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],

    totalPage: Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable: Boolean
}, {
    timestamps: true
});


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover