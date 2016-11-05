import React from 'react'
import TweetItem from "./tweet-item"

export default class DeckListItem extends React.Component {
	render() {
		return (
			<div className="deck-list">
				<div className="deck-title">
					Handle 1
				</div>
				<div className="deck-body">
					<TweetItem />
					<TweetItem />
					<TweetItem />
					<TweetItem />
					<TweetItem />
				</div>
			</div>
		)
	}
}