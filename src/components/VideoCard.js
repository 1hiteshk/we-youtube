import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    
    <div className="p-2 m-2 w-72 shadow-lg ">
      {/* <h1>{info.snippet.title}</h1> */}
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold">{info.snippet.title}</li>
        <li className="text-gray-500 text-md">{snippet.channelTitle}</li>
        <ul className="flex space-x-7 items-center ">
        <li className="text-gray-500">{Math.round(statistics?.viewCount / 1000000)}M views</li>
        <li className="text-gray-500 list-disc"><Moment fromNow>{(snippet?.publishedAt)}</Moment></li>
        </ul>
        {/* <li text-gray-500>{new Date(parseInt(snippet?.publishedAt)).toLocaleDateString()}</li> */}
        
      </ul>
    </div>
    
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
