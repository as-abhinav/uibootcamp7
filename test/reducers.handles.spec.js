import {expect} from 'chai'
import {loop, Effects} from 'redux-loop'

import {ADD_HANDLE, REQUEST_TWEETS} from '../app/actions/handles'
import {fetchTweets} from '../app/effects/handles'
import handlesReducer from '../app/reducers/handles'

describe('Handles reducer', () => {

	it('should return initial state', () => {
		const state = handlesReducer(undefined, {})
		expect(state instanceof Array).to.equal(true)
	})


	it('should return correct state on calling ADD_HANDLE action', () => {
		const action   = {
			type  : ADD_HANDLE,
			handle: 'test'
		}
		const newState = handlesReducer([], action)

		expect(newState.length).to.equal(1)
		expect(newState[0].name).to.equal('test')
		expect(newState[0].isFetching).to.equal(true)
		expect(newState[0].data instanceof Array).to.equal(true)
	})


	it('should return correct state on calling ADD_HANDLE action', () => {

		const action   = {
			      type  : REQUEST_TWEETS,
			      handle: 'test'
		      },
		      previousState = [{"data": [],"isFetching": true,"name": "test"}],
		      newState = handlesReducer(previousState, action)

		expect(newState).to.deep.equal(loop(
			previousState, Effects.promise(fetchTweets, action.handle)
		))
	})

})