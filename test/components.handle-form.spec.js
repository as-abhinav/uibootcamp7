import React from 'react'
import {expect} from 'chai'
import { shallow } from 'enzyme'

import HandleForm from '../app/components/handle-form'

describe('Components.HandleForm', () => {

	const node = shallow(<HandleForm></HandleForm>)
	it('should be visible', () => {
		expect(node.find('.handle-form')).to.have.length(1)
	})
})