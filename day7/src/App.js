import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import P71Basic, { P72Button } from './P71Basic';
import P73Person from './P73Person';
import P74Monkey from './P74Monkey'
// P72Button는 export default값이 아니기 때문에 중괄호를 사용해서 임포트

class App extends Component {
  render() {
    let numberValue = 10;
    numberValue = '길동';
    return (
      <div className="App">
        <h2>React 7th</h2>
        <P71Basic/>
        <P71Basic userName="홍길동"/>
        <P72Button />
        <P72Button buttonLabel="눌러봐"/>
        <P73Person firstName={numberValue} lastName="홍" conuntry="한국"/>
        <P74Monkey nickName='안녕' email='vivid8222@naver.com' womanOrman='여자'/>
      </div>
    );
  }
}

export default App;

