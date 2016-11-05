#Setup Routes 

Tech Import required modules
```js
// app/initialize.js

import {routerForBrowser, RouterProvider} from 'redux-little-router'
import routes from './routes'
```


Configure the router
```js
// app/initialize.js

const {
  routerEnhancer,
  routerMiddleware
  } = routerForBrowser({routes});
```


Add router middlewares to the store
```js
// app/initialize.js

const store = createStore(
  reducers, // All reducers
  {}, // initial state
  compose(
    applyMiddleware(thunkMiddleware), // DO NOT CHANGE THE SEQUENCE OF THUNK MIDDLEWARE. It should always be first.
    routerEnhancer, // Redux little router middleware
    applyMiddleware(routerMiddleware) // Redux little router middleware
  )
)
```


Change your load function as follows

```js
// app/initialize.js

const load = () => {
ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <App />
    </RouterProvider>
  </Provider>
  , document.querySelector('#app')
  )
}
```


Add pages and setup route fragments
-----------------------------------

Create a 'pages' directory and add new pages to that file. Your `App` component in the `components` directory is now a root page. Move it to the `pages` directory.

Add the following pages in the `pages` directory.

* welcome.js
* deck.js

Note that each of these pages should return a React component.


Setup route fragments in the root page i.e. `App` component

```js

// pages/app.js

import React from 'react'
import {RelativeFragment, Fragment} from "redux-little-router"

import Welcome from '../pages/welcome'
import Deck from '../pages/deck'

export default class App extends React.Component {
  render() {
    return (
      <div>
       <Fragment forRoutes={["/", "/welcome"]}>
         <Welcome />
       </Fragment>
				
       <Fragment forRoute="/deck">
         <Deck />
       </Fragment>
      </div>
    )
  }
}
```


Hit the browser with `/welcome` and `/deck` routes to verify if the components are getting rendered in their respective routes.  