#UI Bootcamp  

#Aim
Create a Tweet deck clone [like this](https://tweetdeck.twitter.com) while going through basic concepts of building single page applications  

### Tech Stack

###### Build tool:
* [Brunch](http://brunch.io/)
 
###### Frameworks and libraries:
* [Redux](http://redux.js.org/)
* [React](https://facebook.github.io/react/)
* [Bootstrap](http://getbootstrap.com/)

###### Test Utilities
* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Enzyme](http://airbnb.io/enzyme/)

### Getting started


* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * `cd` into this repo and Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm run start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run prod` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.

## Running the Backend service
   In order to run the Mock twitter backend service, please refer to [this page](https://github.com/ashishpundalik/TwitterBackend/blob/master/README.md)