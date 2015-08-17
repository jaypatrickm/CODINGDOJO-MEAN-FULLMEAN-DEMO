//=======================================================
//FriendFactory
//=======================================================
friends_app.factory('FriendFactory', function($http) 
{
	var factory = {};
	// var friends = [];
	
	factory.getFriends = function(callback)
	{
		$http.get('/friends').success(function(output)
		{
			friends = output;
			callback(friends);
		})
	}

	factory.newFriends = function(callback)
	{
		friends = friends;
		callback(friends);
	}
	
	factory.addFriend = function(info, callback)
	{
		// friends.push({name: info.name, age: info.age});
		console.log('factory 2');
		 console.log(info);
		// callback(friends);
		$http.post('/addnewfriend', info).success(function(output)
		{
			console.log('factory 3');
			callback(output);
		})
	}

	factory.deleteFriend = function(id, callback)
	{
		console.log('factory deleteFriend');
		console.log('factor id', id);
		$http.delete('/destroyFriend/' + id).success(function(returned_data_from_server){
			console.log("SUCCESSFUL - BACK TO FACTORY FROM DELETING FRIEND", returned_data_from_server);
			callback(returned_data_from_server);
		});
	}

	return factory;
})