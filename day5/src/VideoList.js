import React from 'react';
import VideoListItem from './VideoItem'

const VideoList = (props) => {

  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key = {video.etag}
        video = {video}
      />
    )
  });

  return (
    <ul className="card-deck">
      {videoItems}
    </ul>
  )

};


export default VideoList;
