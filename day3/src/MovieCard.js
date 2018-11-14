import React, { Component } from 'react';
import MovieCard100Header from './MovieCard100Header';
import MovieCard200Contents from './MovieCard200Contents';
import MovieCard300Tails from './MovieCard300Tails';

// 리액트 state
// 업데이트를 this.setState()로 해야함

// 리액트 라우팅
// 다른 주소에 따라 다른 뷰를 보여주는 것
// <리액트라우터 설치>
// npx create-react-app router-study
// cd router-study
// yarn add react-router-dom

// const movieArr = [
//   {
//     movieTitle : '해리포터',
//     movieActor : '헤르미온느',
//     movieDesc : '그리핀도르, 슬리데린, 후플후프, 레버넌트'
//   },
//   {
//     movieTitle : '인어공주',
//     movieActor : '에리얼',
//     movieDesc : '바닷속 친구들 모여라'
//   }
// ]

class MovieCard extends Component {
  render() {
    return (
      <div>
        <MovieCard100Header />
        <div>
          {movieArr.map(movie => {
            return <MovieCard200Contents movieTitle={movie.movieTitle} movieActor={movie.movieActor} movieDesc={movie.movieDesc}/>
          })}
        </div>
        <MovieCard300Tails />
      </div>
    );
  }
}

export default MovieCard;

// rcc 해주면 자동으로 이름이랑 생성해준다.
