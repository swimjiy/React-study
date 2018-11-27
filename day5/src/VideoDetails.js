import React, { Component } from 'react'

class VideoDetails extends Component {
    constructor(props) {
        super(props)
        this.state = undefined
    }

    componentWillReceiveProps(props) {
        this.setState(props.video)
    }

    render() {
        // const title = this.state.snippets.title
        // const description = this.state.snippet.description
        // const videoId = this.state.id.videoId
        // const videoUrl = "https://youtube.com/embed/${videoId}"

        return (
            <div className="card">
                {/* <iframe className="embed-responsive embed-responsive-16by9" src={videoUrl}></iframe>
                <h4 className="card-title">{this.state.snippet.title}</h4>
                <p className="card-text">{this.state.snippet.title}</p> */}
            </div>
        )
    }
}

export default VideoDetails;
