import {REQUEST_TWEETS, RECEIVE_TWEETS} from '../actions/handles'

export default (state = [], action) => {
	switch (action.type) {
		case REQUEST_TWEETS:
			let newState = state.map((handles) => handles)

			newState.push({
				name      : action.handle,
				isFetching: true,
				data      : []
			})

			return newState


		case RECEIVE_TWEETS:
			return state.map((handle) => {
				if (handle.name === action.handle) {
					handle.data       = action.data
					handle.isFetching = false
				}
				return handle;
			})
		default:
			return state
	}
}