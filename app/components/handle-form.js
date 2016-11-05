import React from 'react'

export default class HandleForm extends React.Component {
	render() {
		return (
			<div>
				<form className="handle-form">
					<h1 className=" text-muted">Add a handle</h1>
					<input name="twitter-handle" type="text" className="form-control input-lg" placeholder="@JohnMalkovich, #food or #music"></input>
					<button className="btn btn-lg btn-primary btn-block" type="submit">
						Go!
					</button>
				</form>
			</div>
		)
	}
}