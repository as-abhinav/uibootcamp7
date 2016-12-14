export const REQUEST_TWEETS = 'REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const ADD_HANDLE = 'ADD_HANDLE'

export const addHandle = (handle) => {
	return {
		type  : ADD_HANDLE,
		handle: handle
	}
}

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