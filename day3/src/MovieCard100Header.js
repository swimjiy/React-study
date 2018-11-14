import React, { Component } from 'react';

class MovieCard100Header extends Component {
  // 리액트 state
  constructor(props){
    super(props)
    this.state = {
      userName : '기본값',
      number : 0
    }
    setTimeout(() => {
      this.setState({userName : '홍길동'})
    }, 3000);
    // setTimeout(perform_3second.bind(this), 3000)
  
    // function perform_3second(){
    //   this.setState({userName : '홍길동'})
    // };
  }
  // 리액트 state 끝

  render() {
    return (
      <div>
        <h1>My Movie Chart</h1>
        <h2>{this.state.userName} 님 반갑습니다.</h2>
      </div>
    );
  }
}

export default MovieCard100Header;