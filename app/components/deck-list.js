import React from 'react'
import TweetItem from "./tweet-item"

export default class DeckList extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.onViewMounted(this.props.handle.name)
	}

	render() {
		const handle = this.props.handle
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
}