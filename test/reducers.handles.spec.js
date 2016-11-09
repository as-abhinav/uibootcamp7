import {expect} from 'chai'
import {REQUEST_TWEETS} from '../app/actions/handles'
import handlesReducer from '../app/reducers/handles'

describe('Handles reducer', () => {

	it('should return initial state', () => {
		const state = handlesReducer(undefined, {})
		expect(state instanceof Array).to.equal(true)
	})


	it('should return correct new state', () => {
		const action   = {
			type  : REQUEST_TWEETS,
			handle: 'test'
		}
		const newState = handlesReducer(undefined, action)

		expect(newState.length).to.equal(1)
		expect(newState[0].name).to.equal('test')
		expect(newState[0].isFetching).to.equal(true)
		expect(newState[0].data instanceof Array).to.equal(true)
	})
})