import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoSearch from './VideoSearch';
import VideoDetails from './VideoDetails';
import './App.css'
const API_KEY = "AIzaSyC_SMfYoEP1JbCZFCHr8dgEqirsu1df_MM";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      selectVideo: '',
      term: ''
    }
    
  }
  
  videoSearch = (term) => {
    this.setState({
      term: term
    })
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({ 
        data: data,
        selectedVideo : data[0]
      });
    });
  }
  
  render() {
    // console.log(this.state.selectedVideo)
    return (
      <div className="App">
        <header className=" pt-3">
          <div className="navbar">
            <div className="container justify-content-between">
              <a href="http://sumim-project.surge.sh/" className="navbar-brand text-white"><h2>Youtube List</h2></a>
              <VideoSearch onCreate={this.videoSearch}/>
            </div>
          </div>
        </header>
        <main className="container pt-3">
          <VideoList 
            videos={this.state.data} 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
          <VideoDetails 
            video={this.state.selectedVideo}/>
        </main>
      </div>
    );
  }
}

export default App;