import React from 'react';
import VideoItem from './VideoItem'
import './Video.css'

const VideoList = (props) => {

  const videoItems = props.videos.map(video => {
    return (
      <VideoItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video}
      />
    )
  });

  return (
    <ul className="card-columns">
      {videoItems}
    </ul>
  )

};


export default VideoList;
