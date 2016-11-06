export const REQUEST_TWEETS = 'REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

let requestTweets = (handle) => {
	return {
		type  : REQUEST_TWEETS,
		handle: handle
	}
}

let receiveTweets = (handle, data) => {
	return {
		type  : RECEIVE_TWEETS,
		data  : data,
		handle: handle
	}
}

export function fetchTweets(handle) {
	return (dispatch) => {

		dispatch(requestTweets(handle))

		setTimeout(() => {
			dispatch(receiveTweets(handle, [{name: 'tweet1'}, {name: 'tweet2'}]))
		}, 2000)
	}
}