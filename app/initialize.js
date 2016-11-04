import ReactDOM from 'react-dom'
import React from 'react'
import App from 'components/app'

const load = () => {
	ReactDOM.render(<App />, document.querySelector('#app')
	)
}

if (document.readyState !== 'complete') {
	document.addEventListener('DOMContentLoaded', load)
} else {
	load()
}