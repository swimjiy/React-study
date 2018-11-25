import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      selectVideo: null
    }

    const API_KEY = "AIzaSyC_SMfYoEP1JbCZFCHr8dgEqirsu1df_MM";

    YTSearch({ key: API_KEY, term: "let it go" }, data => {
      this.setState({ 
        data: data,
        selectedVideo : data[0]
      });
      console.log(data);
    });
  }
  

  render() {
    return (
      <div>
        <header className="container">
          <h1 className="text-center">Youtube List</h1>
        </header>
        <main className="container">
          <VideoList videos={this.state.data}/>
        </main>
      </div>
    );
  }
}

export default App;
