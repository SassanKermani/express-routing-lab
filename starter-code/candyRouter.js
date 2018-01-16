
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"},
{"id": 5, "name":"Jelly Belly","color":"Orange"}];

//What would need to go into candies
//in order to pass our first test?

//delete
router.delete('/:id', function(req, res){
	candies[req.params.id - 1] = null;
});

// //making a candy
router.post('/', function(req, res) {

	let tempVar = req.body;

	console.log(tempVar); 

	console.log("you are at post");
    candies.push(tempVar);
    res.send(tempVar);
  });

//updateing a candy
router.put('/:id', function(req, res){
	console.log("at post");
	console.log(req.body);

	console.log(req.params.id)
	req.body.id = req.params.id;
	candies[req.params.id - 1] = req.body;
	res.send(candies);

});

//seeing one candy
router.get('/:id', function(req,res) {
	creq.body.id = candies.length + 1;
	candies.push(req.body);
	res.send(req.body);
});

//seeing all the candy
router.get('/', function(req,res) {
	console.log("you are at candyRouter");
	res.send( candies );
});

// Fill out the rest of the routes here

module.exports = router;

