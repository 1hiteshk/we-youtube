import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Button from './Button';

const MainContainer = () => {
  return (
    <div className='col-span-11 overflow-hidden '>
     <div className='flex items-center'>
     < Button name={"<"} className="text-lg" />
     <BsArrowLeftCircleFill />
      <ButtonList />
     </div>
      
      <VideoContainer />
    </div>
  )
}

export default MainContainer;
