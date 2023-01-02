const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function(req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });

const movies = ["rang de basanti", "the shining", "lord of the rings", "batman bigins"]

//problem1
// Create an API for GET /movies that returns a list of movies.
// Define an array of movies in your code and return the value in response.
router.get('/movies', (req, res) => {
    res.send(movies)
});

//problem 2
//Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1).
// You can define an array of movies again in your api
router.get('/movies/:indexNumber', (req, res) => {
    let index = req.params.indexNumber 
    res.send(movies[index])
})

// problem 3
// Handle a scenario in problem 2 where if the index is greater than the valid maximum value
// a message is returned that tells the user to use a valid index in an error message.
const movies1 = ["rang de basanti", "the shining", "lord of the rings", "batman bigins"]
router.get('/movies1/:indexNum', (req, res) => {
    let indexNum = req.params.indexNum
    if (indexNum <0 || indexNum >= movies1.length-1){
        return res.send("Error: Please give a valid input")
    }else{
        res.send(movies1[indexNum])
    }
    
})

//problem 4
//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
 //Each movie object should have values - id, name. An example of movies array is 

let films = [ {
    'id': 1,
    'name' :'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
router.get('/films',(req,res)=>{
    res.send(films)
});

//problem 5
//write api GET /films/:filmId where filmId is the value received in request path params.
//Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 

router.get('/films/:filmid',(req,res)=>{
    let filmid = req.params.filmid
    if (filmid>films.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(films[filmid-1])
    }
})

module.exports = router;