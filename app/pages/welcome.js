import React from 'react'
import HandleForm from '../containers/handle-form'

export default class Welcome extends React.Component {
	render() {
		return (
			<div id="welcome-page">
				<HandleForm />
			</div>
		)
	}
}