import React from 'react';

const VideoListItem = ({video}) => {
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;


  return (
    <li className="card">
      <img className="card-img-top" src={imageUrl} />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </li>
  )
};

export default VideoListItem;
