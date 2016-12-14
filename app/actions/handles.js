export const REQUEST_TWEETS = 'REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export const requestTweets = (handle) => {
	return {
		type  : REQUEST_TWEETS,
		handle: handle
	}
}

export const receiveTweets = (handle, data) => {
	return {
		type  : RECEIVE_TWEETS,
		data  : data,
		handle: handle
	}
}