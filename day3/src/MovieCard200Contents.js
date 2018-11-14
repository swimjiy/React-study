import React, { Component } from 'react';
import './MovieCard200Contents.css';

class MovieCard200Contents extends Component {
  render() {
      const cardStyle = {
          width:200,
          height:400
      }
      // const Movie = function(props){
      //   return (
          
      //   )
      // }
      return (
        <div className="stMovieCardContents1">
              <strong>No.1</strong>
              <h3>영화 제목</h3>
              {/* <h3>{props.movieTitle}</h3> */}
              <hr/>
              <span>주연배우</span>
              <p>영화에 대한 블라블라 설명 </p>
          </div>
      )
      // return (
      //     <div className="stMovieCardContents1">
      //         <strong>No.1</strong>
      //         <h3>{props.movieTitle}</h3>
      //         <hr/>
      //         <span>주연배우</span>
      //         <p>영화에 대한 블라블라 설명 </p>
      //     </div>
      // );
  }
}

export default MovieCard200Contents;