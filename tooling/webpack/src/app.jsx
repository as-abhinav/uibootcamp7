'use strict';
import React from 'react';

let App = React.createClass({
  render : function(){
    return (
      <div class="container-fluid">
        <div class="row content">
          <div class="col-md-12">
            <h1>Welcome to <code>webpack</code> based code</h1>
            <h4>Check the source of this page to make sure everything was loaded successfully!</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
