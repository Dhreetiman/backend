let mainC = require('../controllers/mainController');
let userModel1 = require('../models/userModel1')
let productModel = require('../models/productModel')


const mainMidd = function (req, res, next) {
    let isFreeAppUser = req.headers['isfreeappuser']
    // if (!isfreeappuser) return res.send({Error: "isFreeAppUser header is mandatory"})
    // else return next()
    if (isFreeAppUser == "true") {
        let data = req.body
        data["isFreeAppUser"] = Boolean(isFreeAppUser)
        next()
    } else if (isFreeAppUser == "false") {
        let data = req.body
        data["isFreeAppUser"] = Boolean('')
        next()
    } else {
        res.send({
            error: "A Header is Missing",
            header: "isFreeAppUser"
        })
    }

}

const isValid = async function (req, res, next) {
    const {
        userId,
        productId
    } = req.body;

    // CHEKING USER-ID IN DATABASE
    const userFound = await userModel1.findById(userId);

    // CHEKIND PRODUCT-ID IN DATABASE
    const prodFound = await productModel.findById(productId);

    // CHEKING IF IT IS A FREE-ORDER

    if (userFound["isFreeAppUser"]) {
        //SENDING TO BODY FOR CREATE ORDER
        req.body.isFreeAppUser = true;
        req.body.amount = 0;
        

        // IF IT IS A PAY-ORDER
    } else {
        // CHEKING THE BALANCE OF USER IS SUFFICIENT
        if (userFound.balance < +prodFound.price) {
            // RETURNING IF INSUFFICIENT BALANCE WITH MESSAGE
            return res.send("Insufficient balance!");
        }

        //SENDING TO BODY FOR CREATE ORDER
        req.body.isFreeAppUser = false;
        req.body.amount = +prodFound.price;

        // UPDATING USER BALANCE
        userFound.balance -= +prodFound.price;
        userFound.balance = userFound.balance.toFixed(2);
        userFound.save();
    }
    // ADDING DATE AND TIME OF PURCHASE ORDER IN EIGHTER CASE
    req.body.date = new Date();

    // SENDING CONTROL TO NEXT FUNCTION
    next();
}










// const mid2 = function (req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3 = function (req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4 = function (req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// const myMiddleware = function (req, res, next) {
//     req.month = "November"
//     console.log('I am inside a middleware!')
//     next()
// }

// const myOtherMiddleware = function (req, res, next) {
//     // Setting an attribute 'wantsJson' in request
//     // The header value comparison is done once and
//     // the result can be used directly wherever required.
//     let acceptHeaderValue = req.headers["accept"]

//     if (acceptHeaderValue == "application/json") {
//         req.wantsJson = true
//     } else {
//         req.wantsJson = false
//     }
//     next()
// }

// module.exports.mid1 = mid1
// module.exports.mid2 = mid2
// module.exports.mid3 = mid3
// module.exports.mid4 = mid4
// module.exports.myMiddleware = myMiddleware
// module.exports.myOtherMiddleware = myOtherMiddleware
module.exports.mainMidd = mainMidd
module.exports.isValid=isValid