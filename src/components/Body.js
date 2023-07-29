import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import SearchResultPage from './SearchResultPage'

const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <Sidebar />
      <Outlet />      {/*ya <MainContainer> show ho ya <WatchPage> so for that we use <outlet>*/}
    
    </div>
  )
}

export default Body
