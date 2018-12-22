import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import P81Menu from './P81Menu';
import P82Ham from './P82Ham';
import P82TollTip from './P82TollTip';
import P84TooltipUser from './P84TooltipUser';
import TimerWrapper from './P85Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REACT 8th</h1>
        <P81Menu />
        <P82Ham />
        <P82TollTip text="the book you reading now">
          React Quickly
        </P82TollTip>
        <P84TooltipUser />
        <TimerWrapper />
      </div>
    );
  }
}

export default App;
