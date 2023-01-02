const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel");

const authenticate = function (req, res, next) {
    //check the token in request header
    //validate this token
    try {
        let token = req.headers["x-auth-token"];
        // if (!token) token = req.headers["x-auth-token"];
        console.log(token);

        //If no token is present in the request header return error
        if (!token) return res.status(404).send({
            status: false,
            msg: "token must be present"
        });

        let decodedToken = jwt.verify(token, 'abc')

        if (!decodedToken) return res.status(406).send({
            status: false,
            msg: "token is not valid"
        })


        next()
    } catch (error) {
        res.status(500).send({
            status: "error",
            msg: error.message
        })
    }
}


const authorise = function (req, res, next) {
    try {
        // comapre the logged in user's id and the id in request
        let token = req.headers["x-auth-token"]
        let decodedToken = jwt.verify(token, 'abc')

        // if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

        let userToBeModified = req.params.userId
        //userId for the logged-in user
        let userLoggedIn = decodedToken.userId

        //userId comparision to check if the logged-in user is requesting for their own data
        if (userToBeModified != userLoggedIn) return res.status(401).send({
            status: false,
            msg: 'User logged is not allowed to modify the requested users data'
        })
        next()
    } catch (error) {
        res.status(500).send({
            status: "error",
            msg: error.message
        })
    }
}

const isDeletedMW = async function (req, res, next) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        // console.log(userDetails)
        if (!userDetails)
            return res.status(404).send({
                status: false,
                msg: "No such user exists"
            });
        else {
            let deleted = userDetails['isDeleted']
            if (deleted == true) {
                return res.status(400).send({
                    status: false,
                    msg: "User has been deleted"
                })
            }
        }


        next()
    } catch (error) {
        res.status(500).send({
            status: "error",
            msg: error.message
        })
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise
module.exports.isDeletedMW = isDeletedMW