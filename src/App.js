import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/Store";
import Error from "./components/Error";
import {BrowserRouter,Route,Router,RouterProvider, Routes,createBrowserRouter, useParams, useSearchParams,} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
import Sidebar from "./components/Sidebar";
import ButtonList from "./components/ButtonList";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />, // children will go where my Outlet is
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch",
//         element: <WatchPage />,
//       },
//       {
//         path: "/searchresultpage",
//         element: <SearchResultPage />,
//       },
//     ],
//   },
//   {
//     path: "/searchresultpage",
//     element: <SearchResultPage />,
//   },
// ]);

function App() {
  
  return (
    <Provider store={store}> 
      <Head />
      
     
      <Routes>
        <Route path="/" element={ <Body />} >
          <Route index path="/" element={<MainContainer />}/>
          <Route path="watch" element={ <WatchPage /> } />
          <Route path="/searchResults/:searchQuery" element={ <SearchResultPage /> } />
          <Route path="*" element={ <Error />} />

        </Route>

        
        
        
      
      
       
      </Routes>
      
      

       
        {/* <RouterProvider router={appRouter} /> */}

        {/*
         * Head
         *Body
         * Sidebar
         * Maincontainer
         *   ButtonList
         *   VIdeoContainer
         *     VideoCard
         */}
  
    </Provider>
  );
}

export default App;
