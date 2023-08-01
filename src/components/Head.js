import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { addVideos } from "../utils/resultVideoSlice";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY, SEARCH_RESULTS_VIDEOS_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const [resultVideo, setResultVideo] = useState(null);

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];
  

  

  // to use the cache we have to dispatch a action from reduxstore to appsite via useSelector
  const searchCache = useSelector((store) => store.search);

  /*  searchcache
  * {
      "iphone" : ["iphone 11", "iphone 14"]
  }
  * searchQuery = iphone
  */
 
  useEffect(() =>{
    // api call

    //make an api call after every key press
    //but if the diff. b/w two press/2 api call is <200ms decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {                     // cache is stored in redux store so when we back <- less api calls made
        setSuggestions(searchCache[searchQuery]);
      } else {
      getSearchSuggestion()
      } 
    }, 200);

    return() => {
      clearTimeout(timer);
    };
  }, [ searchQuery]);

  useEffect(() => {
    searchQueryHandler();
    // getSearchResultVideos(searchQuery)
  },[searchQuery]);

  
  const searchQueryHandler = (event) => {
    if( (event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length > 0 ){
      getSearchResultVideos(searchQuery);
      navigate(`/searchResults/${searchQuery}`);
      
    }
  }

  const getSearchResultVideos = async (searchQuery) => {
    console.log(searchQuery)
    const datav = await fetch(`${SEARCH_RESULTS_VIDEOS_API}${searchQuery}&key=${GOOGLE_API_KEY}`);
    const videosData = await datav.json();
    // console.log(videosData);
    await setResultVideo(videosData?.items);
    console.log(resultVideo)
    addResultVideos(resultVideo)
  }
  
  /*
  *key - i
  * - render the component
  * - useEffect(); coz searchQuery changed
  * - start timer to make an api call after 200ms
  * 
  * key - ip
  * destroy the component(call useEffect return method)
  * - re-render the component
  * - useEffect()
  * - new start timer for 200ms to make an api call

  also we have to clear the settimeout for every rerender
  */

const getSearchSuggestion = async () => {
  // console.log("API call - " + searchQuery);
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json = await data.json();
  // console.log(json)
  setSuggestions(json[1]);

  //update cache
  dispatch(cacheResults({
    [searchQuery]: json[1],
  }));
};

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const addResultVideos = (resultVideo) => {
    dispatch(addVideos(resultVideo));
  }

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXz9fQzMzP3+fi2t7YiIiIqKirk5uU/Pz+AgYHn6ej2+PdaWlpwcHAlJSUfHx8ZGBnc3t2UlpXu8O+jpKM2NjbMzMxVVVVOTk4vLi4TExOjM+vzAAABA0lEQVR4nO3bAXKCMBBA0UBrW1BEQRTvf9H2EtudWd67wZ8MhAnZ1gAAAAAAAAAAAAAAAAAAAAAASDD2scbsvrZ9xNpaauM4nD+jnYfMxPEyddGmS2bhcA0P7LrrkFk4/0PhnFnYnqfwwNMzM7Df9ukUa9q3PjXxdv+Jdb+lBsZv+PlbPgAAAFDFGCs7r/XLV6wl+yBqfX3Heq2py9iv8x58ILzPa+YqLo/owL/Ex5JYOLzDA7vunfnfov4a1n8O679LD7AftvrfNAAAAEAN5e+Xlr8jfIB73uXv6teft6g/M1N/7qn+7Fr9+cNWf4YUAAAAAAAAAAAAAAAAAAAAAOCgfgHY3y+u9Hc0OQAAAABJRU5ErkJggg=="
          alt="menu--v1"
        />
        <a href="/">
          <img
            className="h-8 mx-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </a>
      </div>
      <div className="col-span-10 mx-12">
        <div className=" flex ">
        <input
          className="w-1/2 rounded-l-full p-2 border border-gray-400 px-5"
          placeholder="  Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false) ,500 )  } // setTimeout coz for the clicked suggestion list should update the value of input search bar before getting blurred
        />
        
        <button className="border border-gray-400 px-5 p-2 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler('searchButton')}
        >
        <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: "none", display: "block", width: "100%", height: "100%" }} > <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
        </button>
        </div>

        {showSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-[24.5rem] shadow-lg rounded-lg border-gray-100">
          <ul >
            {suggestions.map( (suggestion) => {
              return(
                <li key={suggestion} onClick={() => setSearchQuery(suggestion) } className="shadow-sm py-2 px-3  hover:bg-gray-100">🔍 {suggestion}</li>
              );
                 }   )}
          </ul>
        </div> ) }
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-male-circle"
        />
      </div>
    </div>
  );
};

export default Head;
