
mocha.setup("bdd");
var assert = chai.assert;
var should = chai.should();

describe('HelloWorld', () => {
  //Make all of your changes here
  let name = 'User';

  var HelloWorld = class HelloWorld extends React.Component {
    render() {
      return (<div><span>Hello World</span></div>);
    }
  };

  var Status = () => {
    return (<div>I loaded... yay!</div>);
  };

  //End change Section - Do not modify Below

  let component = null,
      element   = null;

  beforeEach(() => {
      element = React.createElement(HelloWorld);
      component = React.addons.TestUtils.renderIntoDocument(element);
  });

  it('renders the component with className of my-component for HelloWorld', () => {
     let result = React.addons.TestUtils.findRenderedDOMComponentWithClass(component, 'my-component');
     assert.ok(result);
  });

  it('outputs proper name in the span tag for HelloWorld', () => {
    let result = React.addons.TestUtils.findRenderedDOMComponentWithClass(component, 'my-component');
    assert.equal(result.querySelector('span').textContent, `Hello ${name}`);
  });

  it('renders a nested Status component in HelloWorld', () => {
    let result = React.addons.TestUtils.findRenderedDOMComponentWithClass(component, 'status');
    assert.ok(result);
  });

});

mocha.run();



/*
mocha.setup("bdd");
var assert = chai.assert;
var should = chai.should();

describe('HelloWorld', () => {
  //Make all of your changes here
  let name = 'User';

  var HelloWorld = class HelloWorld extends React.Component {
    render() {
      return (<div className="my-component"><span>Hello {name}</span><Status /></div>);
    }
  };

  var Status = () => {
    return (<div className="status">I loaded... yay!</div>);
  };
  //End change Section - Do not modify Below

  let component = null,
      element   = null;

  beforeEach(() => {
      element = React.createElement(HelloWorld);
      component = React.addons.TestUtils.renderIntoDocument(element);
  });

  it('renders the component with className of my-component for HelloWorld', () => {
     let result = React.addons.TestUtils.findRenderedDOMComponentWithClass(component, 'my-component');
     assert.ok(result);
  });

  it('outputs proper name in the span tag for HelloWorld', () => {
    let result = React.addons.TestUtils.findRenderedDOMComponentWithClass(component, 'my-component');
    assert.equal(result.querySelector('span').textContent, `Hello ${name}`);
  });

  it('renders a nested Status component in HelloWorld', () => {
    let result = React.addons.TestUtils.findRenderedDOMComponentWithClass(component, 'status');
    assert.ok(result);
  });

});

mocha.run();
*/
