import React from 'react'

import DeckList from '../components/deck-list'

export default class Deck extends React.Component {
	render() {
		return (
			<div id="deck-page">
				<div className="deck-wrap clearfix">
					<DeckList/>
					<DeckList/>
					<DeckList/>
				</div>
			</div>
		)
	}
}