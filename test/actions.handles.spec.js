import {expect} from 'chai'
import {requestTweets} from '../app/actions/handles'

describe('Handle actions', () => {

	it('should return object with correct values', () => {
		const action = requestTweets('test')
		expect(action.type).to.be.equal('REQUEST_TWEETS')
		expect(action.handle).to.be.equal('test')
	})
})