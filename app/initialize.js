import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/app'

import {createStore, compose, applyMiddleware} from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'


const store = createStore(
	reducers, // All reducers
	{}
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.querySelector('#app')
)