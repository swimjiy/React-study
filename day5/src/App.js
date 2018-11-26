import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import './App.css'
import VideoSearch from './VideoSearch';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      selectVideo: null
    }

    this.videoSearch('let it go');
  }
  
  videoSearch(term) {
    console.log(term);
    const API_KEY = "AIzaSyC_SMfYoEP1JbCZFCHr8dgEqirsu1df_MM";
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({ 
        data: data,
        selectedVideo : data[0]
      });
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className=" pt-3">
          <div className="navbar">
            <div className="container justify-content-between">
              <a href="#" className="navbar-brand text-white"><h2>Youtube List</h2></a>
              <VideoSearch onSearch={this.videoSearch}/>
            </div>
          </div>
        </header>
        <main className="container pt-3">
          <VideoList videos={this.state.data}/>
        </main>
      </div>
    );
  }
}

export default App;
