import React from 'react'
import DeckList from "./deck-list"

export default class DeckListWrap extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="deck-wrap clearfix">
				{
					this.props.handles && this.props.handles.length
						?
						this.props.handles.map((handle) => <DeckList key={handle.name} handle={handle} onViewMounted={this.props.onViewMounted} />)
						:
						<p>Loading...</p>
				}
			</div>
		)
	}
}