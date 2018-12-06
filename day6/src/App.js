import React, { Component } from 'react';
import P61Basic from './P61Basic';
import P66Textarea from './P66Textarea'

class App extends Component {
  render() {
    return (
      <div className="App">
        <P61Basic />
        <P66Textarea />
      </div>
    );
  }
}

export default App;
