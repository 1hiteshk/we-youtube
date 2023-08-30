import React from 'react'
import Button from './Button';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";


const list = ["All","music","movies","javasxript","reactjs","programs","podcasts" ,"gaming","film","song","live","cool","top","cook","song","live"];

const ButtonList = () => {
  return (
    <div className='flex whitespace-nowrap mx-auto'>
      
      {list.map((item,index) => (
        <Button name={item} key={index}>{item}</Button>
      ))}
    </div>
  )
}

export default ButtonList
