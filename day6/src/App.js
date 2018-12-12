import React, { Component } from 'react';
import P61Basic from './P61Basic';
import P66Textarea from './P66Textarea'
import P63Dropdown from './P63Dropdown'
import MultiCheck from './MultiCheck'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Form type</h1>
        <P61Basic />
        <hr/>
        <P66Textarea />
        <hr/>
        <P63Dropdown />
        <hr/>
        <MultiCheck />
      </div>
    );
  }
}

export default App;
