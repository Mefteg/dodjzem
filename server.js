var express = require("express");

// create app
var app = express();

// configure path root
app.configure(function() {
	app.use(express.static(__dirname + "/public"));
});

// match get requests
app.get("/", function(_req, _res, _next) {
	res.render("./public/index.html");
});

// set the port
app.listen(8080);
