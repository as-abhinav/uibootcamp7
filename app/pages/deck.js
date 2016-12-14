import React from 'react'

import DeckListWrap from '../containers/deck-list-wrap'

export default class Deck extends React.Component {
	render() {
		return (
			<div id="deck-page">
				<DeckListWrap />
			</div>
		)
	}
}