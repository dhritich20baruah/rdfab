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
    <div className="p-10 flex w-96">
      <Display items={gate}/>
    </div>
    </>
  )
}
export default Gate