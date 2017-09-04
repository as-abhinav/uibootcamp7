import {receiveTweets} from '../actions/handles'

export const fetchTweets = (handle) => {
	// Your API call
	return Promise.resolve(receiveTweets(handle, [{user: 'tweet 1', tweet: 'This is a test tweet'}, {user: 'tweet 2', tweet: 'This is a test tweet'}]))

	//return window.fetch('http://localhost:8080/api/search?hashtag=test&tweetCount=10')
	//.then((res) => res.json())
	//.then((data)=> receiveTweets(handle, data))
}