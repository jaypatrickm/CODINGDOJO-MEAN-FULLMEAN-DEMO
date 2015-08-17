//=======================================================
//friend model
//=======================================================
var mongoose = require('mongoose');
//=======================================================
//FriendSchema
//=======================================================
var FriendSchema = new mongoose.Schema({
	name: String, 
	age: Number
});

mongoose.model('Friend', FriendSchema);