//=======================================================
//Project: Project -- FULL MEAN -- server.js by JM 5.29.15
//=======================================================

//=======================================================
//requires: path, express
//=======================================================
var express = require("express");
var path = require("path");
var app = express();
//=======================================================

//=======================================================
//app setup : set server, static file server points to 'client' directory
//=======================================================
app.use(express.static(path.join(__dirname, './client')));
var server = app.listen(3333, function() { console.log("listening on port 3333") });
//=======================================================

//=======================================================
//requires: routes
//=======================================================
require('./config/mongoose.js');
require('./config/routes.js')(app);