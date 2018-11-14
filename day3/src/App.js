import React, { Component } from 'react'
import './App.css'
import MovieCardCls from './MovieCardCls'
import MovieCard from './MovieCard'


class App extends Component {
 render() {
   return (
     <div className="App">
       <MovieCardCls movieTitle="퍼스트맨" />
       {/*  <MovieCard/>  */}
       {/*  <MovieCardCls movieTitle="퍼스트맨" />  */}
     </div>
   )
 }
}

export default App
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <MovieCard/>
//       </div>
//     );
//   }
// }

// export default App;
