import React from 'react'

import DeckList from '../containers/deck-list'

export default class Deck extends React.Component {
	render() {
		return (
			<div id="deck-page">
				<DeckList />
			</div>
		)
	}
}