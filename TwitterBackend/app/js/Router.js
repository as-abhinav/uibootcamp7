module.exports = (function() {
	var router, routes;
	var twitterUtil = require('./TwitterUtil.js');

	function Router(express, routes) {
		init(express, routes);
		console.log("init");
	}

	Router.prototype.setupRoutes = function() {
		configureUserTweetsRoute();
		configureMyTweetsRoute();
	}

	Router.prototype.getExpressRouter = function() {
		return router;
	}

	var init = function(express, definedRoutes) {
		if(express.Router && definedRoutes) {
			router = express.Router();
			routes = definedRoutes;
		} else {
			throw new Error("Invalid params passed to the constructor");
		}
	};

	var configureUserTweetsRoute = function() {
		console.log("Configuring route: "+routes.userTweets);
		router.get(routes.userTweets, function(req, res) {
			console.log("Entering route: "+routes.userTweets);
			console.log("Request params: ", req.query);
			twitterUtil.getUserTimeline(req.query.twitterHandle, req.query.tweetCount, function(err) {
				console.log(err);
			}, function(resp) {
				console.log(resp);
				res.send(resp);
			})
		});
	};

	var configureMyTweetsRoute = function() {
		console.log("Configuring route: "+routes.myTweets);
		router.get(routes.myTweets, function(req, res) {
			console.log("Entering route: "+routes.myTweets);
			console.log("Request params: "+req);
			twitterUtil.getMyTweets(req.tweetCount, function(err) {
				console.log(err);
			}, function(resp) {
				console.log(resp);
				res.send(resp);
			});
		});
	};

	return Router;
})();