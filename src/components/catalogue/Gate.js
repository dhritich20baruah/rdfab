import React, { useState, useEffect } from 'react'
import items from './img/Images'
import Display from './Display'

const Gate = () => {
  const [gate, setGate]= useState(items)

  useEffect(() => {
   
    setGate(items.filter(item=>item.category === "gates"))
  }, [])

  return (
    <>
      <Display items={gate}/>
    </>
  )
}
export default Gate