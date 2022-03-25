import React, { useState } from 'react'
import items from './img/Images'
import Display from './Display'

const Gate = () => {
  const [gate, setGate]= useState(items)
  const filterImages = (category)=>{
  setGate(items.filter(item=>item.category === gate))
  }
  return (
    <>
      <Display items={gate}/>
    </>
  )
}
export default Gate