import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;

  return (
    <div className="col-lg-4 col-md-6" onClick={() => onVideoSelect(video)}>
      <div className="video-item">
        <img className="video-img-top" src={imageUrl} />
        <div className="video-body">
          <h5 className="video-title">{video.snippet.title}</h5>
          <p className="video-writter">{video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  )
};

export default VideoItem;
