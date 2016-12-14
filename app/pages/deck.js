import React from 'react'

import DeckListWrap from '../components/deck-list-wrap'

export default class Deck extends React.Component {
	render() {
		return (
			<div id="deck-page">
				<div className="deck-wrap clearfix">
					<DeckListWrap />
				</div>
			</div>
		)
	}
}