const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const mainC = require('../controllers/mainController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/new-user",commonMW.mainMidd , mainC.newUser)
router.post("/new-product", mainC.newProduct)
router.post("/newOrder", commonMW.mainMidd, commonMW.isValid, mainC.newOrder)


module.exports = router;