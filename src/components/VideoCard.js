import React from 'react'

const VideoCard = (info) => {
    console.log(info);
    // const {snippet, statistics,} = info;
    // const { channelTitle, thumbnails, title } = snippet;

  return (
    <div>
        <h1>{info?.snippet?.channelTitle}naam</h1>
      {/* <img src={thumbnails?.medium?.url} alt='thumbnail' /> */}
      {/* <ul>
        <li>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        <li>{new Date(parseInt(snippet.publishedAt)).toLocaleDateString()}</li>
      </ul> */}
    </div>
  )
};

export default VideoCard;
