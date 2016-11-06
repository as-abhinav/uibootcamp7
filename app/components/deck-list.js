import React from 'react'
import TweetItem from "./tweet-item"

export default class DeckList extends React.Component {
	constructor(props) {
		super(props)
	}

	renderList(handle) {
		return (
			<div className="deck-list" key={handle.name}>
				<div className="deck-title">
					{handle.name}
				</div>
				<div className="deck-body">
					{
						handle.isFetching
							?
							<p>Loading...</p>
							:
							handle.data.map((tweet) => <TweetItem key={tweet.name} tweet={tweet} />)
					}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="deck-wrap clearfix">
				{
					this.props.handles.length
						?
						this.props.handles.map((handle) => this.renderList(handle))
						:
						<p>Loading...</p>
				}
			</div>
		)
	}
}