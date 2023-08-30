import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() =>{
    getVideos();
  },[]);

  useEffect(() => {
    window.addEventListener('scroll',infiniteScroll,true);
    return () => {
      window.removeEventListener('scroll',infiniteScroll,true);
    }
  },[nextPageToken]);

  const getVideos = async () =>{
      const url = nextPageToken !== "" ? `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEOS_API;
    const data = await fetch(url);
    const json = await data.json();
    setNextPageToken(json?.nextPageToken);

    console.log(json.items);
    console.log(json);
    setVideos([...videos, ...json?.items]);
    console.log(videos.length," 1")
    
  }
console.log(videos.length," 2");

// const fetchData = async () => {
//   const moreData = await fetch(YOUTUBE_VIDEOS_API);
//   const json = await moreData.json();
//   setVideos([...videos,...json.items]);
// }

const infiniteScroll = () => {
  if (window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300){
    getVideos();
  }
}

  if(videos.length === 0) return (<h1 className='font-bold'>Loading... Please wait...</h1>);

  return (
    <div className='flex flex-wrap'>
      <AdVideoCard info={videos[0]} />

{/* <InfiniteScroll
 className='flex flex-wrap'
 dataLength={videos.length}
 next={fetchData}
 hasMore={true}
 loader={
  <div className='bg-black text-white font-bold mx-auto'>Loading please wait...  </div>
 }
> */}
      {videos.map(video => (
        <Link key={video?.id} to={"/watch?v="+video.id} ><VideoCard  info={video} /> </Link>
      ))}
       {/* <VideoCard info={videos[0]} /> make it work for 1 then use map listing */}
       {/* </InfiniteScroll> */}
    </div>
  )
};

export default VideoContainer;
