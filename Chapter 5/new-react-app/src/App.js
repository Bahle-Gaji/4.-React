import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';


class App extends Component {

  render() {
    return (
      <div>
        <JumboTronComponent sentence='This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.'>
          
        </JumboTronComponent>
        {/* <Products/> */}
      </div>
    );
  }
}

export default App;