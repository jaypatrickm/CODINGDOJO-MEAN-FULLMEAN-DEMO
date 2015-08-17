console.log('routes loaded');
var bodyParser = require('body-parser');
//=======================================================
//requires
//=======================================================
//=======================================================
//Routes 
//=======================================================
module.exports = function(app)
{
var friends = require('./../server/controllers/friends.js');
	app.get('/friends', function(req, res)
	{
		friends.show(req, res);
	})

	app.post('/addnewfriend',bodyParser.json(), function(req, res)
	{
		console.log('in addfriend 4', req.body);
		friends.addNewFriend(req, res);
	})

	app.delete('/destroyFriend/:id', function(req, res){
		console.log('in destroy friend');
		friends.destroyFriend(req, res);
	})
};