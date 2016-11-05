import React from 'react'
import {RelativeFragment, Fragment} from "redux-little-router"

import Welcome from '../pages/welcome'
import Deck from '../pages/deck'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Fragment forRoutes={["/", "/welcome"]}>
					<Welcome />
				</Fragment>

				<Fragment forRoute="/deck">
					<Deck />
				</Fragment>
			</div>
		)
	}
}