import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
 
  useEffect(() =>{
    // api call

    //make an api call after every key press
    //but if the diff. b/w two press/2 api call is <200ms decline api call
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return() => {
      clearTimeout(timer);
    };
  },[searchQuery]);

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
  console.log("API call - " + searchQuery);
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json = await data.json();
  // console.log(json)
  setSuggestions(json[1]);
}

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

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
        <div>
        <input
          className="w-1/2 rounded-l-full p-2 border border-gray-400 px-5"
          placeholder="  Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
          🔍
        </button>
        </div>
        {showSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-[24.5rem] shadow-lg rounded-lg border-gray-100">
          <ul>
            {suggestions.map(s =>  <li key={s} className="shadow-sm py-2 px-3  hover:bg-gray-100">🔍 {s}</li> )}
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
