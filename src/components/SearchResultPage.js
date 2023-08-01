import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SEARCH_RESULTS_VIDEOS_API, GOOGLE_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchResultPage = () => {
  const searchVideos = useSelector((store) => store.resultVideo.videos);
  // console.log(searchVideos,'search result page');
  const videos = searchVideos[0];
  // const [videos, setVideos] = useState();
  // console.log(videos[0])

  // useEffect(() => {
  //   // setVideos(searchVideos[0]);
  // },[videos])

  return (
    <div className="m-2 p-2 flex flex-col gap-2">
      {videos?.map((video,index) => {
        return (
          <Link key={video?.id?.videoId} to={"/watch?v="+video?.id?.videoId} >
          <VideosResultCard info={video} key={index}/>
          </Link>
           
        );
      })}
    </div>
  );
};

export default SearchResultPage;

const VideosResultCard = ({ info }) => {
  return (
    <div className="flex justify-start">
      <img className="rounded" src={info?.snippet?.thumbnails?.medium?.url} />
      <div>
        <h1 className="p-1 mx-1 font-semibold">{info?.snippet?.title}</h1>
        <h1 className="p-2 mx-1 text-gray-600">
          {info?.snippet?.channelTitle}
        </h1>
        <h1 className="p-2 mx-1 text-gray-800">{info?.snippet?.description}</h1>
      </div>
      <div></div>
    </div>
  );
};
