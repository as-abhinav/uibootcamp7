import React from 'react'

export default class HandleForm extends React.Component {
	constructor(props) {
		super(props)
		this.onHandleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e) {
		e.preventDefault()
		this.props.onHandleSubmit(this.refs.handleInput.value)
		return false
	}
	render() {
		return (
			<form className="handle-form" onSubmit={this.onHandleSubmit}>
				<h1 className=" text-muted">Add a handle</h1>
				<input ref="handleInput" name="twitter-handle" type="text" className="form-control input-lg" placeholder="@JohnMalkovich, #food or #music"></input>
				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Go!
				</button>
			</form>
		)
	}
}