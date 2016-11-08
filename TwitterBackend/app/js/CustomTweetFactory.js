module.exports = (function() {
	var CustomTweet = require('./CustomTweet.js');
	var defaultTweets;
	var build = function(tweets) {
		var customTweets = new Array();
		if(Array.isArray(tweets)) {
			for(var i = 0; i < tweets.length; i++) {
				customTweets.push(new CustomTweet(tweets[i]).getSimplifiedTweet());
			}
		} else {
			throw new Error("Invalid input, factory needs an Array");
		}
		return customTweets;
	}

	return {build};
})();