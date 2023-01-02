const AuthorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    try {
        let author = req.body
        let {
            fname,
            lname,
            title,
            email,
            password
        } = author
        
        if (!fname && !lname && !title && !email && !password) return res.status(404).send({status:false,msg: "All Fields are Mandetory"})
        if (typeof fname != 'string' && typeof lname != 'string') {return res.status(404).send({status: false,msg: "Invalid Input, Please enter the valid inputs"})}
        let authorEmail = await AuthorModel.findOne({email:email})
        if (authorEmail) return res.status(404).send({status:false,msg:"This email is already registered"})
        let authorCreated = await AuthorModel.create(author)
        res.status(201).send({
            data: authorCreated
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            msg: error.message
        })

    }
}

const getAuthorsData = async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({
        data: authors
    })
}

module.exports.createAuthor = createAuthor
module.exports.getAuthorsData = getAuthorsData