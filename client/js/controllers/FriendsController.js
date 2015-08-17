//=======================================================
//FriendsController
//=======================================================
friends_app.controller('FriendsController', function($scope, FriendFactory) 
{
	// FriendFactory.getFriends(function(data)
	// {
	// 	$scope.friends = data;
	// });
	
	var updateFriendList = function() {
		FriendFactory.getFriends(function(friends){
			$scope.friends = friends;
		})
	}

	updateFriendList();
	$scope.addfriend = function() 
	{
		console.log('in add friend');
		FriendFactory.addFriend($scope.new_friend, function() 
		{
			// FriendFactory.newFriends(function(data)
			// {
			// 	$scope.friends = data;
			// })
			updateFriendList();
			$scope.new_friend = {};
		})
	}

	$scope.deleteFriend = function(id)
	{
		console.log('in delete friend');
		console.log('this is id:', id);
		FriendFactory.deleteFriend(id, function()
		{
			updateFriendList();
		})
	}
})