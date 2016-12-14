import React from 'react'
import DeckList from "./deck-list"

export default class DeckListWrap extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="deck-wrap clearfix">
				 <DeckList />
				 <DeckList />
				 <DeckList />
			</div>
		)
	}
}