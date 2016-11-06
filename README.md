#Create containers and presentational components


You need to make your dumb components functional. `React-Redux` provides a way to separate logic from react components and extract it out into containers.

These containers just hold two functions in them.

* **`mapStateToProps`**: Provides all the props needed for a React component
* **`mapDispatchToProps`**: Provides all actions needed for a React component



Create a `app/containers` directory and add a `handle-form.js` file in it.


Container:
```js

app/containers/handle-form.js

import React from 'react'
import {connect} from "react-redux"
import {PUSH} from 'redux-little-router'

import {fetchTweets} from '../actions/handles'
import HandleForm from '../components/handle-form'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleSubmit: (handle) => {
      dispatch(fetchTweets(handle))

      dispatch({
        type   : PUSH,
        payload: '/deck'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleForm)


```


Modify the `app/components/handle-form.js` component to read props supplied by the `handle-form` container.


Component:
```js

// app/components/handle-form.js

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

```


Modify `app/pages/welcome.js` file to call container instead of a component.

```js

// app/pages/welcome.js

import HandleForm from '../containers/handle-form'

```


Now, hit the browser with `localhost:5555/welcome`, add a tweet handle 'test' in the input and hit go. The page should be redirected to `/deck` route.


Rendering tweets. Finally!!
---------------------------

Add `deck-list.js` file in `app/containers` directory.


```js

//app/containers/deck-list.js

import React from 'react'
import {connect} from "react-redux"

import DeckList from '../components/deck-list'

const mapStateToProps = (state) => {
  return {
    handles: state.handles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

```


Modify the `app/components/deck-list.js` component to read props supplied by the `deck-list` container.

```js

// app/components/deck-list.js

import React from 'react'
import TweetItem from "./tweet-item"

export default class DeckList extends React.Component {
  constructor(props) {
    super(props)
  }

  renderList(handle) {
    return (
      <div className="deck-list" key={handle.name}>
        <div className="deck-title">
          {handle.name}
        </div>
        <div className="deck-body">
          {
            handle.isFetching
              ?
              <p>Loading...</p>
              :
              handle.data.map((tweet) => <TweetItem key={tweet.name} tweet={tweet} />)
          }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="deck-wrap clearfix">
        {
          this.props.handles.length
            ?
            this.props.handles.map((handle) => this.renderList(handle))
            :
            <p>Loading...</p>
        }
      </div>
    )
  }
}
```


Modify the `app/components/tweet-item.js` component to render tweet data.

```js
// app/components/tweet-item.js


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

```



Modify the 'app/pages/deck.js' file to call `deck-list` container instead of a component

```js
import React from 'react'

import DeckList from '../containers/deck-list'

export default class Deck extends React.Component {
  render() {
    return (
      <div id="deck-page">
        <DeckList />
      </div>
    )
  }
}
```


Now, hit `localhost:5555/welcome`. Enter 'test' handle in the input. Hit Go. The page should be redirected to `/decks` route. The 2 dummy tweets should be visible in the test deck.