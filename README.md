# Designing a visual prototype


For quick css work, we will be using `Twitter Bootstrap`. 

Add the Bootstrap CDN to your `index.html` page's `<head>` block.

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

Also, put all your `<script>` tags at the end of body tag to speed up page loading.


Restructuring `app.js`

```js
import React from 'react'
import {RelativeFragment, Fragment} from "redux-little-router"

import Navbar from '../components/navbar'
import Welcome from '../pages/welcome'
import Deck from '../pages/deck'

export default class App extends React.Component {
  render() {
    return (
      <div className="viewport">
        <Navbar />

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



Designing new components:

Refer to `app/components` directory.

**`handle-form`**: Displays form to add handle to the deck

**`navbar`**: Holds application title and a button to add more handles

**`deck-list-wrap`**: Wraps all the deck-list components

**`deck-list`**: Column like boxes which display tweets of a respective handle

**`tweet-item`**: Displays tweet information


Styling for the above components is added in `app/styles/style.css`

