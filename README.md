#Writing tests

In this section, We will learn how to setup test framework in `brunch` and test the following: 

* Actions
* Async Actions
* Reducers
* Components
* Containers


Lets start with setting up the test framework.

Install the following packages

```sh
npm install chai mocha --save-dev 
```

Setup your brunch config as follows
 
```js
// brunch-config.js

exports.config = {
  paths    : {
    watched: ['app', 'test']
  },
  files    : {
    javascripts: {
      joinTo: {
        'javascripts/vendor.js': /^(?!app|test)/,
        'javascripts/app.js'   : /^app/,
        'test.js'              : /^test/
      },
    },
    stylesheets: {joinTo: 'stylesheets/style.css'}
  },
  plugins  : {
    babel: {presets: ['es2015', 'react']}
  },
  server   : {
    port: 5555
  }
}

```


Create a `test` directory.

Add a `.mocha.opts` file in the `test` directory.

In `.mocha.opts` file add the following commands:
 
```sh
--compilers js:babel-core/register
--require jsdom-global/register

```



Add a `.babelrc` file at the root level

```js
{
	"presets": ["es2015", "react"]
}
```



Testing Actions
---------------

Create an `actions.handles.spec.js` file within `test` directory.

```js
// test/actions.handles.spec.js

import {expect} from 'chai'
import {requestTweets} from 'actions/handles'

describe('Handle actions', () => {

  it('should return object with correct values', () => {
    const action = requestTweets('test')
    expect(action.type).to.be.equal('REQUEST_TWEETS')
    expect(action.handle).to.be.equal('test')
  })
})

```


Testing Reducers
----------------

Reducers are yet again pure functions and can be tested individually.

Create a `reducers.handles.spec.js` file within `test` directory.

```js
// test/reducers.handles.spec.js

import {expect} from 'chai'
import {REQUEST_TWEETS} from 'actions/handles'

import handlesReducer from 'reducers/handles'

describe('Handles reducer', () => {

  it('should return initial state', () => {
    const state = handlesReducer(undefined, {})
    expect(state instanceof Array).to.equal(true)
  })


  it('should return correct new state', () => {
    const action   = {
      type  : REQUEST_TWEETS,
      handle: 'test'
    }
    const newState = handlesReducer(undefined, action)

    expect(newState.length).to.equal(1)
    expect(newState[0].name).to.equal('test')
    expect(newState[0].isFetching).to.equal(true)
    expect(newState[0].data instanceof Array).to.equal(true)
  })
})

```


Testing Components
------------------

Testing react component needs an actual DOM or anything that emulates the DOM.

So we will be using a mocha helper in this case

```sh
npm install jsdom jsdom-global --save-dev
```


Also for testing React components we will be using React testing utilities

```sh
npm install react-addon-test-utils enzyme --save-dev
```

Create a `components.handle-form.spec.js` in your `test` directory


```js
// test/components.handle-form.spec.js

import {expect} from 'chai'

import React from 'react'
import { shallow } from 'enzyme'

import HandleForm from '../app/components/handle-form'

describe('Components.HandleForm', () => {

  const node = shallow(<HandleForm />)
  it('should be visible', () => {
    expect(node.find('.handle-form')).to.have.length(1)
  })
})

```


Testing Async actions
---------------------

Please refer to [Redux](http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators) docs for more information on testing Async actions.



Testing containers (connected components)
-----------------------------------------

Please refer to [Redux](http://redux.js.org/docs/recipes/WritingTests.html#connected-components) docs for more information on testing containers.
