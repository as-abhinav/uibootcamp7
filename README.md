#Setup ReduxJS  

Import required modules
```js
//app/initialize.js

import {createStore, compose, applyMiddleware} from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
```


Time to initialize redux store
```js
const store = createStore(
  reducers, // All of your application reducers
  {} // initial state of the application
)
```


Create a root reducer file at the base level.
```js
//app/reducer.js

export default (state = [], action) => {
  return state
}
```


Change your load function as follows

```js
const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
	</Provider>
    , document.querySelector('#app')
  )
}
```