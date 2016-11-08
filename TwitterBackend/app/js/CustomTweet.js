var CustomTweet = (function() {
	var tweet = null;
	var NoTweetsException = require('./NoTweetsException.js');
	function CustomTweet(Tweet) {
		tweet = Tweet;
	}

	CustomTweet.prototype.getSimplifiedTweet = function() {
		if(tweet) {
			return {
				"tweet": tweet.text,
				"user": tweet.user.name,
				"handle": tweet.user.screen_name,
				"location": tweet.user.location
			}
		}
		throw new NoTweetsException("EmptyTweet");
	}

	return CustomTweet;
})();

module.exports = CustomTweet;