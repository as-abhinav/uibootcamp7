import {receiveTweets} from '../actions/handles'

export const fetchTweets = (handle) => {
	// Your API call
	return Promise.resolve(receiveTweets(handle, [{name: 'tweet1'}, {name: 'tweet2'}]))
}