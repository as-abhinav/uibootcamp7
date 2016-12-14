import ReactDOM from 'react-dom'
import React from 'react'
import App from 'pages/app'

import {createStore, compose, applyMiddleware} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'

import {routerForBrowser, RouterProvider} from 'redux-little-router'
import routes from './routes'

const {
	      routerEnhancer,
	      routerMiddleware
      } = routerForBrowser({routes});

const store = createStore(
	reducers, // All reducers
	{},
	routerEnhancer, // Redux little router middleware
	applyMiddleware(routerMiddleware) // Redux little router middleware
)


ReactDOM.render(
	<Provider store={store}>
		<RouterProvider store={store}>
			<App />
		</RouterProvider>
	</Provider>
	, document.querySelector('#app')
)