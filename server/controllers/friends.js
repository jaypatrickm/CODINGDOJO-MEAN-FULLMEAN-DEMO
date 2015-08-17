console.log('friends controller loaded');
//=======================================================
//attach friend.js model
//=======================================================
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
//=======================================================
//friends.js Controller
//=======================================================
module.exports = (function() 
{
	return {
		show: function(req, res)
		{
			// res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 35}]);
			Friend.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		}, 
		addNewFriend: function(req, res)
		{
			console.log(req.body);
			var friend = new Friend(req.body);
  			friend.save(function(err, record){
  				if(err)
  				{
  					res.json({status:'failed', err:err})
  				}else
  				{
  					res.json({status:'success'})
  				}
  			})
		},
		destroyFriend: function(req, res)
		{
			console.log('in destroy friend controller', req);
			console.log(req.params.id);
			Friend.remove({ _id: req.params.id}, function (err, status) {
				if (err){
					console.log('ERR');
				} else {
					res.json({status:'success'});
				}
			})
		}
	}
})();