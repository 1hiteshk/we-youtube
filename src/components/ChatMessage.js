import React from 'react'
import {BiUserCircle} from "react-icons/bi"

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <BiUserCircle className=" text-xl cursor-pointer h-8 w-8" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
