import React from 'react'


const VideoDetails = ({video}) => {
    console.log(video)
    if (!video) {
        return (
            <div>Loading...</div>
        )
    }
    let videoId = video.id.videoId;
    let url = 'https://www.youtube.com/embed/' + videoId;
    let publishedAt = video.snippet.publishedAt;
    let videoDate = publishedAt.substring(0, 10)

    return (
    <div className="video-detail mt-5">
        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="video-body">
            <h5 className="video-title mb-3">{video.snippet.title}</h5>
            <p className="video-writter">작성자 : {video.snippet.channelTitle}</p>
            <p className="video-date">등록일 : {videoDate}</p>
            <p className="video-desc">{video.snippet.description}</p>
        </div>
    </div>
    );
}

export default VideoDetails;
