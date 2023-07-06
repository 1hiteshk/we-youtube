import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';


const LiveChat = () => {
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
       const i =  setInterval(() => {
          // API Polling
          // fetch data and convert it to json
          console.log("API polling ")

          dispatch(addMessage({
            name: generateRandomName(),
            message: generateRandomMessage(20)+"🚀"
          }))
        },2000);

        return () => clearInterval(i);
    },[]);

  return (
    <div className='ml-2 p-2 w-full h-[440px] bg-slate-100 rounded-lg border border-black overflow-y-scroll flex flex-col-reverse'>
        { chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
    </div>
  )
}

export default LiveChat;
