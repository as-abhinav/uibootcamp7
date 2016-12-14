# Create actions, reducers for fetching tweets

For async actions we will be needing a redux middleware library called as `redux-loop`. 

Install `redux-loop` in your app

```sh
npm install --save redux-loop
```


Register the middleware when initializing the redux store.

```js
// app/initialize.js

import { install } from 'redux-loop'

const store = createStore(
  reducers, // All reducers
  {},
  compose(
    routerEnhancer, // Redux little router middleware
    applyMiddleware(routerMiddleware), // Redux little router middleware
    install()
  )
)
```



Creating Redux Actions 
----------------------

Actions are just a plain javascript object. What do you want to include in this object is totally upto you.

Create a `app/actions` directory and add a `handles.js` file in it.


Creating action constants is important as these actions will be listened by the `reducers` and your application state will be manipulated accordingly.
  
  
 

```js

// app/actions/handles.js

export const REQUEST_TWEETS = 'REQUEST_TWEETS'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

```


Actions can be called by anyone. So we create action functions to return new action object.

```js
// app/actions/handles.js

export const requestTweets = (handle) => {
  return {
    type  : REQUEST_TWEETS,
    handle: handle
  }
}

export const receiveTweets = (data, handle) => {
  return {
    type  : RECEIVE_TWEETS,
    data  : data,
    handle: handle
  }
}
```


Creating Redux Reducers
-----------------------

Reducers are responsible for updating your application state. Each reducer handles a specific part of the application state. In this case `handles` key in the application state.

This is the initial application state:
```js
{
    handles: []
}
```


Let's register our `app/reducers/handles.js` reducer to the specific part of tha application state. i.e. the `handles` key.

```js

// app/reducers.js 

import {combineReducers} from "redux-loop"
import  handles from './reducers/handles'

export default combineReducers({
	handles
})

```

Create a `effects` folder under the `app` directory and add a `handle.js` file in it.

This will hold your API call for fetching tweets.

```js
import {receiveTweets} from '../actions/handles'

export const fetchTweets = (handle) => {
  // Your API call
  return Promise.resolve(receiveTweets(handle, [{name: 'tweet1'}, {name: 'tweet2'}]))
}

```


Now, modify `app/reducers/handle.js` file to listen to a redux action that we just created and act upon it accordingly.


```js

// app/reducers/handle.js

import {REQUEST_TWEETS, RECEIVE_TWEETS} from '../actions/handles'
import {fetchTweets} from '../effects/handles'
import {loop, Effects} from 'redux-loop'

export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_TWEETS:
      let newState = state.map((handles) => handles)

      newState.push({
        name      : action.handle,
        isFetching: true,
        data      : []
      })

      return loop(
        newState,
        Effects.promise(fetchTweets, action.handle)
      )


    case RECEIVE_TWEETS:
      return state.map((handle) => {
        if (handle.name === action.handle) {
          handle.data       = action.data
          handle.isFetching = false
        }
        return handle;
      })
    default:
      return state
  }
}

```
