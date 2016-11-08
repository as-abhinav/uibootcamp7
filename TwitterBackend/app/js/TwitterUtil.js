var TwitterUtil = (function() {
	"use strict";

	var twitterConfig = require('./config/twitterAuthConfig.json');
	var Twitter = require('twitter-node-client').Twitter;

	var CustomTweetFactory = require('./CustomTweetFactory.js');

	var errorCB, successCB;

	var isAdapterInitialized = false;

	var twitter = new Twitter({
	    "consumerKey": twitterConfig.consumerKey,
	    "consumerSecret": twitterConfig.consumerSecretKey,
	    "accessToken": twitterConfig.applicationToken,
	    "accessTokenSecret": twitterConfig.applicationTokenSecretKey,
	    "callBackUrl": twitterConfig.callBackUrl
	});

	var getUserTimeline = function(twitterHandle, tweetCount, errorCB, successCB) {
		if(!successCB || !errorCB) {
			throw new Error("Need to supply a success and an error callback");
		} else {
			twitter.getUserTimeline({ screen_name: twitterHandle, count: tweetCount},
			twitterAuthFailure.bind(this, errorCB), twitterAuthSuccess.bind(this, errorCB, successCB));
		}
	};

	var getMyTweets = function(tweetCount, errorCB, successCB) {
		if(!successCB || !errorCB) {
			throw new Error("Need to supply a success and an error callback");
		} else {
			twitter.getReTweetsOfMe({count: tweetCount}, twitterAuthFailure.bind(this, errorCB),
				twitterAuthSuccess.bind(this, errorCB, successCB));
		}
	}

	var twitterAuthSuccess = function(errorCB, successCB, response) {
		console.log("sucess", response);
		var jsonResp = JSON.parse(response);
		console.log(jsonResp);
		try {
			var tweets = CustomTweetFactory.build(jsonResp);
			console.log("Success!");
			console.log("Resp: ", tweets);
			successCB(tweets);
		} catch(exception) {
			console.log("Exception occured in parsing tweets: ", exception);
			errorCB(exception)
		}
	};

	var twitterAuthFailure = function(errorCB, error) {
		console.log("Failure calling twitter API: ", error);
		errorCB(error);
	}

	return {getUserTimeline, getMyTweets};
})();

module.exports = TwitterUtil;