import React from 'react'


export default class TweetItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="media tweet-item">
				<div className="media-left">
					<a href="#">
						<img alt="64x64" className="media-object" src="https://unsplash.it/128/128?random&blur"></img>
					</a>
				</div>
				<div className="media-body">
					<p className="media-heading">{this.props.tweet.name}</p>

					<p className="media-content">
						{this.props.tweet.content}
					</p>
				</div>
			</div>
		)
	}
}