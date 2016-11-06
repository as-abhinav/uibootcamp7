import React from 'react'
import {Fragment} from 'redux-little-router'

export default class Deck extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">Tweet Deck Clone</a>
					</div>
					<div className="navbar-right">
						<Fragment forRoute="/deck">
							<button className="btn btn-success btn-add-deck btn-sm">Add deck</button>
						</Fragment>
					</div>
				</div>
			</nav>
		)
	}
}