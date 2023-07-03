import React from 'react'
import Button from './Button'

const list = ["All","music","movies","gaming","film","song","live","cool","top","cook","song","live"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item,index) => (
        <Button name={item} key={index}>{item}</Button>
      ))}
    </div>
  )
}

export default ButtonList
