import React, { Component } from 'react'

const VideoDetails = (props) => {

        // const title = selectVideo.video.snippets.title
        // const description = video.snippet.description
        // const videoId = video.id.videoId
        // const videoUrl = "https://youtube.com/embed/${videoId}"
        console.log(props.video)
        return (
            <div className="card">
                {/* {selectVideo.snippets.title} */}
                {/* <iframe className="embed-responsive embed-responsive-16by9" src={videoUrl}></iframe> */}
                {/* <h4 className="card-title">{props.snippets.title}</h4> */}
                {/* <p className="card-text">{description}</p> */}
                <h2>this is a test!</h2>
            </div>
        )
}

export default VideoDetails;
