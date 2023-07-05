import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  useEffect(() =>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    // console.log(json.items);
    // console.log(json);
    setVideos(json.items);
    console.log(videos.length," 1")
  }
console.log(videos.length," 2")

  if(videos.length === 0) return (<h1>Loading...</h1>);

  return (
    <div className='flex flex-wrap'>
      <AdVideoCard info={videos[0]} />

      {videos.map(video => (
        <Link key={video.id} to={"/watch?v="+video.id} ><VideoCard  info={video} /> </Link>
      ))}
       {/* <VideoCard info={videos[0]} /> make it work for 1 then use map listing */}
    </div>
  )
};

export default VideoContainer;
