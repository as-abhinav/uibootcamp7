(function() {
	var Router = require("./Router.js");
	var routes = require("./Routes.json");

	var start = function() {
		var express = require('express');
		var app = express();
		var bodyParser = require('body-parser');

		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());

		var router = new Router(express, routes);

		router.setupRoutes();

		app.use(routes.parentRoute, router.getExpressRouter());

		app.listen(8080, function() {
			console.log('Application started on port 8080!');
		});
	}();
})();