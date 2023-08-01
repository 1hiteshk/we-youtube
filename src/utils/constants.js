const GOOGLE_API_KEY =  "AIzaSyDqKVX1KMBAaF3_W9ElCk8f6Jnn5vy0X3g";
// const GOOGLE_API_KEY =  "AIzaSyDDA74laCci5KWpSERYEKAfLLiP8YmwGNA";
// const GOOGLE_API_KEY =  "AIzaSyDabwYxrb27QzpzsWk6JhGCxf7x7HQLEbM";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 30;

const SEARCH_RESULTS_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
 // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=surfing&key=[YOUR_API_KEY] 

 export {SEARCH_RESULTS_VIDEOS_API, GOOGLE_API_KEY};


